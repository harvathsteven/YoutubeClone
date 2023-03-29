import React from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPage.module.css';

function VideoPage() {
    return (
        <div className={styles.VideoPage}>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=uZN5I7m3mDQ&t=3198s'
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    );
}

export default VideoPage;
