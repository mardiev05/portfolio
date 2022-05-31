import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (<div className="title__row">
            <div className="title__content">
                <p className="title__name">Hi, my name is</p>
                <h1 className="title">Shakhzod Mardiev. <br />
                    I build things for the web.</h1>
                <p className="title__text">I’m a software engineer specializing in building
                    (and occasionally designing) exceptional digital experiences. Currently, I’m focused
                    on building accessible, human-centered products at <span>Upstatement</span>
                </p>
            </div>
            <button className="title__btn">Check Out My Cource!</button>
        </div>);
    }
}
