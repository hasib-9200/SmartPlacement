import React from 'react'
import { Link } from 'react-router-dom'
import AuthApi from '../../apis/auth_api/auth_api'

function Navbar({ currentUser, logout }) {
    return (
        <nav className="navbar sticky-top navbar-expand navbar-dark bg-primary">
            <Link to={"/"} style={{ marginLeft: "10px" }} className="navbar-brand">
                SmartPlacement
            </Link>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                        Home
                    </Link>
                </li>
            </ul>
            {currentUser ? (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Status
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Requiurements
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Records
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Attachments
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            {currentUser.username}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={logout}>
                            LogOut
                        </a>
                    </li>
                </ul>
            ) : (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">
                            Login
                        </Link>
                    </li>
                </ul>
            )}
        </nav>)
}


export default Navbar