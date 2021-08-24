import React from 'react'
import { BiHomeAlt, BiPhoneCall } from 'react-icons/bi';
import { VscProject } from 'react-icons/vsc';
import '../CSS/NavBar.css';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand my-auto" >Óscar Fernández Sánchez</p>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/">
                            <label for="home">
                                <input className="nav-input" type="radio" id="home" name="group" />
                                <span className="nav-button">
                                    <span className="nav-icon">
                                        <BiHomeAlt />
                                    </span>
                                    <span className="nav-text">
                                        Home
                                    </span>
                                </span>
                            </label>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/projects">
                            <label for="projects">
                                <input className="nav-input" type="radio" id="projects" name="group" />
                                <span className="nav-button">
                                    <span className="nav-icon">
                                        <VscProject />
                                    </span>
                                    <span className="nav-text">
                                        Projects
                                    </span>
                                </span>
                            </label>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/contact">
                            <label for="contact">
                                <input className="nav-input" type="radio" id="contact" name="group" />
                                <span className="nav-button">
                                    <span className="nav-icon">
                                        <BiPhoneCall />
                                    </span>
                                    <span className="nav-text">
                                        Contact
                                    </span>
                                </span>
                            </label>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
