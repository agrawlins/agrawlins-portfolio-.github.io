import FacebookPic from "../../../images/logos/facebook-logo-png.png";

const Facebook = () => {
    return(
        <a href="https://www.facebook.com/adam.rawlins.75" target="_blank">
            <button>
                <img src={FacebookPic} className="FacebookPic"></img>
            </button>
        </a>
    )
}

export default Facebook;