import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    const [activePage] = useState(location.pathname);

    return (
        <div className='navbar'>
            <div className="main">
                <div className="navbar-blok">
                    <div className="navbar-blok__section">
                        <Link to='/' style={{ color: activePage === '/' ? "var(--red-color)" : "" }}>Home</Link>
                        <Link to='/contacts' style={{ color: activePage === '/contacts' ? "var(--red-color)" : "" }}>Contacts</Link>
                    </div>
                    <div className="navbar-blok__section">
                        <Link to='/store' style={{ color: activePage === '/store' ? "var(--red-color)" : "" }}><button>Store</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};