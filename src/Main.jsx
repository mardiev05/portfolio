import React, { Component } from "react";
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import Header from "./Header/Header"
import AboutMe from "./AboutMe/AboutMe";
import IveWorked from "./I've Worked/IveWorked";
import Portfolios from "./Portfolio/Portfolios";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import "./App.css"



export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: true,
            scrollShow: true,
            scrollPos: 0,
            experiance: [
                {
                    id: 1,
                    title: "Engineer",
                    titleSpan: "@ Upstatement",
                    date: "May 2018 - Present",
                    firsP: "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    secondP: "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    thirdP: "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
                },
                {
                    id: 2,
                    title: "Studio Developer",
                    titleSpan: "@ Scout",
                    date: "January - April 2018",
                    firsP: "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
                    secondP: "Helped solidify a brand direction for blistabloc that spans both packaging and web",
                    thirdP: "Interfaced with clients on a weekly basis, providing technological expertise"
                },
                {
                    id: 3,
                    title: "UI Engineer Co-op",
                    titleSpan: "@ Apple",
                    date: "July - December 2017",
                    firsP: "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
                    secondP: "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
                    thirdP: "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser"
                },
                {
                    id: 4,
                    title: "Studio Developer",
                    titleSpan: "@ Scout",
                    date: "January - June 2017",
                    firsP: "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
                    secondP: "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
                    thirdP: "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps"
                },
                {
                    id: 5,
                    title: "Software Engineer Co-op",
                    titleSpan: "@ Starry",
                    date: "July - December 2016",
                    firsP: "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
                    secondP: "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
                    thirdP: "nterfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps"
                },
                {
                    id: 6,
                    title: "Creative Technologist Co-op",
                    titleSpan: "@ MullenLowe",
                    date: "July - December 2015",
                    firsP: "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                    secondP: "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
                    thirdP: "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
                }
            ],
            newExpList: {}

        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ logo: !this.state.logo })
        }, 5000)
        // window.addEventListener("scroll", this.scrollHandler)
        this.experianceHandler()
    }

    experianceHandler = (id = 1) => {
        const { experiance } = this.state
        const filtered = experiance.filter(item => item.id == id)
        this.setState({
            newExpList: filtered
        })
    }

    render() {
        const { logo, experiance, newExpList } = this.state
        console.log(experiance)
        return (<div>
            {logo ? <Logo /> : ""}
            <Navbar />
            <div className="container">
                <Header />
                <div className="row">
                    <AboutMe />
                    <IveWorked expHandler={this.experianceHandler} newList={newExpList} />
                    <Portfolios />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>);
    }
}
