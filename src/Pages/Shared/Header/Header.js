import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="row">
            <div className='col-sm-12 col-md-6 col-lg-12'>
                <nav className='header'>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/Inventory">Inventory</Link>
                        <Link to="/about">About</Link>
                        {user ?
                            <button onClick={handleSignOut}>Sign Out</button>
                            :
                            <Link to='/login'>Login</Link>}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;