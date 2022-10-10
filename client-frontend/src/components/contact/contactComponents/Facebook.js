import FacebookPic from "../../../images/logos/facebook-logo-png.png";

const Facebook = () => {
    return(
        <a href="https://www.facebook.com/adam.rawlins.75" target="_blank">
            <button className="contact-button">
                <img src={FacebookPic} className="contact-img"></img>
            </button>
        </a>
    )
}

export default Facebook;