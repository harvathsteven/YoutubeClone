import React from 'react';
import './VideoPage.css';

function VideoPage() {
    const video = {
        title: 'Sample Video',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'This is a sample video description.',
        views: 1234,
        likes: 567,
        dislikes: 10
    };

    return (
        <div className="VideoPage">
            <div className="video-player">
                <video controls width="100%" src={video.url} />
            </div>
            <div className="video-details">
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                <div className="video-stats">
                    <span>Views: {video.views}</span>
                    <span>Likes: {video.likes}</span>
                    <span>Dislikes: {video.dislikes}</span>
                </div>
            </div>
        </div>
    );
}

export default VideoPage;

