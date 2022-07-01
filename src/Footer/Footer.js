import React from "react";
import { FaStar, FaHubspot } from "react-icons/fa"

export default function Footer() {
    return <div className="footer">
        <p className="footer__txt">
            Designed & Built by Shakhzod Mardiev

            <span> <FaStar /> 4,940 <FaHubspot /> 2,272</span>

        </p>
    </div>;
}
