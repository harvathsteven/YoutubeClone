from flask import Flask, request, jsonify
from video_upload import upload_video_to_google_cloud_storage

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
