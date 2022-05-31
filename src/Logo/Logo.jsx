import React, { Component } from "react";
import logo from './logo-img/uzbLogo.png';

export default class Logo extends Component {
    render() {
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>);
    }
}
