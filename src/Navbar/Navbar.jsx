import React, { Component } from "react";
import logo from "../Logo/logo-img/uzbLogo.png"

export default class Navbar extends Component {
    render() {
        return (<div className="navbar">
            <div className="navbar-row">
                <div className="logo">
                    <img src={logo} className="navbar__logo" alt="Logo" />
                </div>
                <ol>
                    <li> <span>About</span></li>
                    <li> <span>Experience</span></li>
                    <li> <span>Work</span></li>
                    <li> <span>Contact</span></li>
                    <button className="navbar__resume-btn">Resume</button>
                </ol>
            </div>
        </div>);
    }
}
