import LinkedInPic from "../../../images/logos/linkedin-logo.png";

const LinkedIn = () => {
    return(
        <a href="https://www.linkedin.com/in/adam-rawlins-a61717b1" target="_blank">
            <button className="contact-button">
                <img src={LinkedInPic} className ="contact-img"></img>
            </button>
        </a>
    )
}

export default LinkedIn;