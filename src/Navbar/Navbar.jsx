import React, { Component } from "react";
import logo from "../Logo/logo-img/uzbLogo.png"

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({
            })
        }, 1000);
    }


    render() {
        return (<div className="navbar">
            <div className="navbar-row">
                <div className="logo">
                    <img src={logo} className="navbar__logo" alt="Logo" />
                </div>
                <div className="hour">
                    <h4>{new Date().getHours() + ":" + new Date().getMinutes()}</h4>
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
