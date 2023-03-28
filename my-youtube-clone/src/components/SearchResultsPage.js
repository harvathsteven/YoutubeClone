import React from 'react';
import VideoCard from './VideoCard/VideoCard';
import './SearchResultsPage.css';

function SearchResultsPage() {
    const videos = [
        {
            id: 1,
            thumbnail: 'https://via.placeholder.com/200x112',
            title: 'Example Video 1',
            channel: 'Example Channel 1',
            views: '5.5k',
            date: '2 days ago',
        },
        {
            id: 2,
            thumbnail: 'https://via.placeholder.com/200x112',
            title: 'Example Video 2',
            channel: 'Example Channel 2',
            views: '3.2k',
            date: '5 days ago',
        },
        // ... more mock video data
    ];

    return (
        <div className="SearchResultsPage">
            {videos.map((video) => (
                <VideoCard key={video.id} {...video} />
            ))}
        </div>
    );
}

export default SearchResultsPage;

