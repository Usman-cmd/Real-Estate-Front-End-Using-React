import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>                                        
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <a className="navbar-brand" href="#title">
                    SIGMA
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item ">
                        <NavLink style={{textDecoration: 'none'}} to="/"><a className="nav-link" href="#footer">
                        Home
                            </a></NavLink> 
                        </li>
                        <li className="nav-item">
                        <NavLink style={{textDecoration: 'none'}} to="/Agent"><a className="nav-link" href="#pricing">
                        Agent
                            </a></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink style={{textDecoration: 'none'}} to="/Signup"><a className="nav-link" href="#pricing">
                        SignUp
                            </a></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink style={{textDecoration: 'none'}} to="/Contactus"><a className="nav-link" href="#cta">
                        Contact Us
                            </a></NavLink>
                        </li>                    
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar