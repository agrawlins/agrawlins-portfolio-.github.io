import InstagramPic from "../../../images/logos/instagram-pic.jpg";

const Instagram = () => {
    return(
        <a href="https://www.instagram.com/adam.rawlins.75/" target="_blank">
            <button className="contact-button">
                <img src={InstagramPic} className="InstagramPic" target="_blank"></img>
            </button>
        </a>
    )
}

export default Instagram;