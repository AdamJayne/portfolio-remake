import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Components imports
import HomePage from './sections/home/home';
import InfoComponent from './sections/information';
import AboutComponent from './sections/about/about';

function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <div className="my_navbar">
                    <input className="menu-checkbox" type="checkbox" id="toggle" />
                    <label htmlFor="toggle" className="btn toggler"><i className="fas fa-bars"></i></label>
                    <div className="nav-menu">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/">Photos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/">Extras</Link>
                        </li>
                    </div>
                </div>




                {/* Routes */}
                <Route path="/about/" exact component={AboutComponent} />
                <Route path="/" exact component={HomePage} />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;