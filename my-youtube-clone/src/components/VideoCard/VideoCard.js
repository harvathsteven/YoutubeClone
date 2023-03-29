import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoCard.module.css';

function VideoCard({ thumbnail, title, channel, views, date }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Replace "/video/1" with the actual video ID from your backend
        navigate('/video/1');
    };

    return (
        <div className="VideoCard" onClick={handleClick}>
            <img src={thumbnail} alt={title} />
            <div className="video-info">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} views • {date}
                </p>
            </div>
        </div>
    );
}

export default VideoCard;
