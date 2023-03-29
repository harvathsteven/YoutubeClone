import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.module.css';

function VideoPlayer({ url }) {
    return (
        <div className="VideoPlayer">
            <ReactPlayer url={url} controls={true} width="100%" height="100%" />
        </div>
    );
}

export default VideoPlayer;
