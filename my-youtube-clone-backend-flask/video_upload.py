from google.cloud import storage
import os

def upload_video_to_google_cloud_storage(video):
    try:
        # Set your Google Cloud Storage bucket name and JSON key file path
        bucket_name = 'my-youtube-clone-backend'
        key_file_path = 'C:/Users/Steven/Downloads/youtubeclone-382400-99f0a25e254c.json'

        # Initialize the Google Cloud Storage client
        storage_client = storage.Client.from_service_account_json(key_file_path)

        # Get the bucket and the remote blob
        bucket = storage_client.get_bucket(bucket_name)
        remote_file_name = 'uploaded_videos/' + video.filename
        blob = bucket.blob(remote_file_name)

        # Upload the video file to Google Cloud Storage
        blob.upload_from_string(video.read(), content_type=video.content_type)

        return True, 'Video uploaded successfully'
    except Exception as e:
        return False, str(e)
