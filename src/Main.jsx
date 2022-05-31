import React, { Component } from "react";
import Logo from "./Logo/Logo"
import "./App.css"
import Navbar from "./Navbar/Navbar"
import Header from "./Header/Header"
import AboutMe from "./AboutMe/AboutMe";


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ logo: !this.state.logo })
        }, 5000)
    }

    render() {
        const { logo } = this.state
        return (<div>
            {logo ? <Logo /> : ""}
            <Navbar />
            <div className="container">
                <Header />
                <div className="row">
                    <AboutMe />
                </div>
            </div>
        </div>);
    }
}
