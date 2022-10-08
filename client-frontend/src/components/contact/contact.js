import React, {useState, useContext, useEffect} from "react"
import Email from "./contactComponents/Email";
import Facebook from "./contactComponents/Facebook";
import GitHub from "./contactComponents/GitHub";
import Instagram from "./contactComponents/Instagram";
import LinkedIn from "./contactComponents/LinkedIn";
import Twitter from "./contactComponents/Twitter";
import YouTube from "./contactComponents/YouTube";
import './contact.css'

const Contact = () => {
    return(
        <div className="contact-body">
            <header className="Contact-Header">
                <h1>Adam Rawlins</h1>
                <h2>Full-Stack Web Developer</h2>
                <h3>Check Out My Original <a href="https://agrawlins.github.io">Page</a>:</h3>
            </header>
            <Email />
            <div className="linkButtons">
                <Facebook />
                <Instagram />
                {/* <Twitter /> */}
                <LinkedIn />
                <GitHub />
                <YouTube />
            </div>
        </div>
    )
}

export default Contact