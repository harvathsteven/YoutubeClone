import React from 'react';
import './UploadPage.css';

function UploadPage() {
    const handleFileUpload = (event) => {
        // Here you can handle the file upload logic
        console.log('File uploaded:', event.target.files[0]);
    };

    return (
        <div className="UploadPage">
            <h2>Upload a Video</h2>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
}

export default UploadPage;

