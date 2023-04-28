import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import subject from '../services/subject.service';
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
    const headerText = 'Header Component';
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const openAlert = () => {
        window.alert('In header component');
    }
    useEffect(() => {
        subject.subscribe(value => {
            setIsLoggedIn(value);
        });
        if (localStorage.getItem('access-token')) {
            setIsLoggedIn(true);
        }
    }, []);
    const logout = () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('user-id');
        setIsLoggedIn(false);
        navigate('/');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{'backgroundColor': '#e9ecef'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" width="180px"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/meetings">Meetings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        {isLoggedIn ? (
                            <React.Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Profile</Link>
                                </li>
                                <li className="nav-item" onClick={logout}>
                                    <span className="nav-link" to="/products">Logout</span>
                                </li>
                            </React.Fragment>
                        ): (
                            <React.Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </React.Fragment>
                        )}
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent;