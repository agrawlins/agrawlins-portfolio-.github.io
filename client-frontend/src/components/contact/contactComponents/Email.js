import EmailIcon from "../../../images/logos/email-icon-vector-illustration.jpg";

const Email = () => {
    return(
        <a href="mailto:agrawlins@gmail.com" className="Email">
            <button className="EmailButton">
                <img src={EmailIcon} className="EmailPic"></img>
                <h2>Email</h2>
            </button>
        </a>
    )
}

export default Email;