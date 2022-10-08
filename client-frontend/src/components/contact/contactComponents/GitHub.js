import GitHubPic from "../../../images/logos/github-square-512.webp";

const GitHub = () => {
    return(
        <a href="https://github.com/agrawlins?tab=repositories" target="_blank">
            <button className="contact-button">
                <img src={GitHubPic} className="GitHubPic"></img>
            </button>
        </a>
    )
}

export default GitHub;