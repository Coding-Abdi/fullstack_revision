import React from 'react';


function Navbar() {
    return (
        <nav>
            <img src={require('./react_logo.png')} className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React - Project 1</h4>
        </nav>
    )
}

export default Navbar;