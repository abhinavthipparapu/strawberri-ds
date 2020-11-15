import React from 'react';
import {Link} from "react-router-dom"

// CSS import
import './Navbar.css'

class Navbar extends React.Component {
    state = {};

render() {
    
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    < span className="navbar-toggler-icon" />
                </button>
                {/* Strawberri logo */}
                <div className="navbar-brand logo">
                    <Link to="/">
                        Strawberri
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-nav ml-auto d-flex">
                        {/* ShortList */}
                        <div className="nav-item">
                            <div className="nav-link">
                                About Us
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

}

export default Navbar