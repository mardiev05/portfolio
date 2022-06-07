import React, { Component } from "react";
import Logo from "./Logo/Logo"
import "./App.css"
import Navbar from "./Navbar/Navbar"
import Header from "./Header/Header"
import AboutMe from "./AboutMe/AboutMe";
import IveWorked from "./I've Worked/IveWorked";


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: false,
            scrollShow: true,
            scrollPos: 0

        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ logo: !this.state.logo })
        // }, 5000)
        window.addEventListener("scroll", this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler)
    }

    scrollHandler = () => {
        console.log(document.body.getBoundingClientRect())

        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            scrollShow: document.body.getBoundingClientRect().top > this.state.scrollPos
        })

    }

    render() {
        console.log(this.state.scrollPos, this.state.scrollShow)
        const { logo, scrollPos, scrollShow } = this.state
        return (<div>
            {logo ? <Logo /> : ""}
            <Navbar />
            <div className="container">
                <Header />
                <div className="row">
                    <AboutMe />
                    <IveWorked />
                </div>
            </div>
        </div>);
    }
}
