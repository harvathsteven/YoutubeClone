import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchQuery) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <header className="Header">
            <Link to="/" className="logo">
                My YouTube Clone
            </Link>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <nav className="navigation">
                <Link to="/upload">Upload</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}

export default Header;