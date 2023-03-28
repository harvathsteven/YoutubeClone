import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';
import UploadPage from './components/UploadPage';
import SearchResultsPage from './components/SearchResultsPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Header />
                </header>
                <main className="App-main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/video/:id" element={<VideoPage />} />
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

