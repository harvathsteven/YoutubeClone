import React, { useState } from 'react';
import styles from './UploadPage.module.css';

function UploadPage() {
    const handleFileUpload = (event) => {
        // Here you can handle the file upload logic
        console.log('File uploaded:', event.target.files[0]);
    };

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement video upload logic here
        console.log(title, description, thumbnail, videoFile);
    };

    return (
        <div className={styles.UploadPage}>
            <h2>Upload Video</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <label>
                    Thumbnail:
                    <input type="file" onChange={(e) => setThumbnail(e.target.files[0])} />
                </label>
                <br />
                <label>
                    Video:
                    <input type="file" onChange={(e) => setVideoFile(e.target.files[0])} />
                </label>
                <br />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default UploadPage;

