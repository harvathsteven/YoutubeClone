from extensions import db
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_user import UserManager
from flask_user import roles_required
from models import User, Video
from video_upload import upload_video_to_google_cloud_storage

app = Flask(__name__)

login_manager = LoginManager()
login_manager.init_app(app)

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///youtube_clone.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['USER_APP_NAME'] = 'YouTube Clone'  # Shown in email templates and page footers
app.config['USER_ENABLE_EMAIL'] = False        # Disable email authentication
app.config['USER_ENABLE_USERNAME'] = True      # Enable username authentication
app.config['USER_REQUIRE_RETYPE_PASSWORD'] = False  # Simplify the registration form
app.config['SECRET_KEY'] = 'J8nDE6J9Zp'

migrate = Migrate(app, db)

user_manager = UserManager(app, db, User)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/upload_video', methods=['POST'])
def upload_video():
    video = request.files.get('video')
    if not video:
        return jsonify({'error': 'No video file provided'}), 400

    success, message = upload_video_to_google_cloud_storage(video)
    if success:
        return jsonify({'message': 'Video uploaded successfully'}), 200
    else:
        return jsonify({'error': message}), 500
    
@app.route('/api/videos', methods=['POST'])
def create_video_metadata():
    data = request.get_json()

    new_video = Video(
        title=data['title'],
        description=data['description'],
        filename=data['filename'],
        uploaded_by=data['uploaded_by']
    )

    db.session.add(new_video)
    db.session.commit()

    return jsonify({"message": "Video metadata created successfully", "video_id": new_video.id}), 201

@app.route('/api/videos', methods=['GET'])
def get_all_video_metadata():
    videos = Video.query.all()
    output = []
    for video in videos:
        video_data = {
            "id": video.id,
            "title": video.title,
            "description": video.description,
            "filename": video.filename,
            "uploaded_by": video.uploaded_by,
            "upload_date": video.upload_date
        }
        output.append(video_data)
    return jsonify({"videos": output})

@app.route('/api/videos/<int:video_id>', methods=['GET'])
def get_video_metadata(video_id):
    video = Video.query.get_or_404(video_id)
    video_data = {
        "id": video.id,
        "title": video.title,
        "description": video.description,
        "filename": video.filename,
        "uploaded_by": video.uploaded_by,
        "upload_date": video.upload_date
    }
    return jsonify({"video": video_data})

@app.route('/api/videos/<int:video_id>', methods=['PUT'])
def update_video_metadata(video_id):
    data = request.get_json()
    video = Video.query.get_or_404(video_id)

    video.title = data['title']
    video.description = data['description']
    video.filename = data['filename']
    video.uploaded_by = data['uploaded_by']

    db.session.commit()

    return jsonify({"message": "Video metadata updated successfully"})

@app.route('/api/videos/<int:video_id>', methods=['DELETE'])
def delete_video_metadata(video_id):
    video = Video.query.get_or_404(video_id)
    db.session.delete(video)
    db.session.commit()

    return jsonify({"message": "Video metadata deleted successfully"})

@app.route('/api/protected', methods=['GET'])
@roles_required('Admin')  # Only users with the 'Admin' role can access this endpoint
def protected():
    return jsonify({"message": "Welcome, admin!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
