import React from "react";
import { FaGithub, FaLinkedinIn, FaCodepen, FaInstagram, FaTwitter } from "react-icons/fa"


export default function Side() {
    return <div>
        <ul className="left__icon">
            <li><FaGithub /></li>
            <li><FaLinkedinIn /></li>
            <li> <FaCodepen /></li>
            <li><FaInstagram /></li>
            <li> <FaTwitter /></li>
            <li> <div className="line"></div></li>
        </ul>
        <ul className="side__email">
            <li className="email"><p>mardiev@gmail.com</p></li>
            <li><div className="line"></div></li>
        </ul>
    </div>;
}
