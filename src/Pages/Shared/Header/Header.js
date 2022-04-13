import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="row">
            <div className='col-sm-12 col-md-6 col-lg-12'>
                <nav className='header'>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/Inventory">Inventory</Link>
                        <Link to="/about">About</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;