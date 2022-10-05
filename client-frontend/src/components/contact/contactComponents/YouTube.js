import YouTubePic from "../../../images/logos/YouTube-pic.webp";

const YouTube = () => {
    return(
        <a href="https://www.youtube.com/channel/UCigQ5VjrovXyo1VazFc8jzg" target="_blank">
            <button>
                <img src={YouTubePic} className="YouTubePic"></img>
            </button>
        </a>
    )
}

export default YouTube;