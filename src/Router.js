import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Components imports
import HomePage from './sections/home/home';
import AboutComponent from './sections/about/about';
import Projects from './sections/projects/projects';
import ContactComponent from './sections/contact/Contact.js';
import PhotosComponent from './sections/photos/Photos';
import ExtrasComponent from './sections/extras/Extras';

function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                {/* Navbar */}
                <div className="my_navbar">
                    <input className="menu-checkbox" type="checkbox" id="toggle" />
                    <label htmlFor="toggle" className="btn toggler">
                        <i className="fas fa-bars"></i>
                    </label>
                    <div className="nav-menu">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects/">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/photos/">Photos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/extras/">Extras</Link>
                        </li>
                    </div>
                </div>



                {/* Routes */}
                <Route path="/about/" exact component={AboutComponent} />
                <Route path="/projects/" exact component={Projects} />
                <Route path="/contact/" exact component={ContactComponent} />
                <Route path="/photos/" exact component={PhotosComponent} />
                <Route path="/extras/" exact component={ExtrasComponent} />
                <Route path="/" exact component={HomePage} />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;
