import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
    const userInfo = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        joined: '2022-01-01'
    };

    const uploadedVideos = [
        { id: 1, title: 'Uploaded Video 1', thumbnail: 'https://via.placeholder.com/240x135' },
        { id: 2, title: 'Uploaded Video 2', thumbnail: 'https://via.placeholder.com/240x135' },
        { id: 3, title: 'Uploaded Video 3', thumbnail: 'https://via.placeholder.com/240x135' }
    ];

    return (
        <div className="ProfilePage">
            <h2>Profile</h2>
            <div className="user-info">
                <h3>Name: {userInfo.name}</h3>
                <p>Email: {userInfo.email}</p>
                <p>Joined: {userInfo.joined}</p>
            </div>
            <h2>Uploaded Videos</h2>
            <div className="uploaded-videos">
                {uploadedVideos.map(video => (
                    <div key={video.id} className="uploaded-video-item">
                        <img src={video.thumbnail} alt={video.title} />
                        <h3>{video.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;

