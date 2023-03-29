import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

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
        <header className={styles.Header}>
            <Link to="/" className={styles.Logo}>
                My YouTube Clone
            </Link>
            <form onSubmit={handleSearch} className={styles.Search}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <nav className={styles.NavLinks}>
                <Link to="/upload" className={styles.NavLink}>Upload</Link>
                <Link to="/profile" className={styles.NavLink}>Profile</Link>
            </nav>
        </header>
    );
}

export default Header;