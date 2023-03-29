import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import VideoPage from './components/VideoPage/VideoPage';
import UploadPage from './components/UploadPage/UploadPage';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Header />
                </header>
                <main className={`App-main`}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/video/:videoId" component={VideoPage} />
                        <Route path="/upload" element={<UploadPage />} />
                        <Route path="/search" element={<SearchResultsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
