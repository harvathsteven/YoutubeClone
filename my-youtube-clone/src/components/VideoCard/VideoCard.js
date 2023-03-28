import React from 'react';
import './VideoCard.css';

function VideoCard({ thumbnail, title, channel, views, date }) {
    return (
        <div className="VideoCard">
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
