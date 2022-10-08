import React from "react"
import {useNavigate, Link} from 'react-router-dom';
import HomeCard from "../homeCard/homeCard"
import historyPageMugshot from "../../../images/mugshots/History Page Mugshot.jpg"
import homePageMugshot from "../../../images/mugshots/Home Page Mugshot.jpg"
import projectsPageMugshot  from "../../../images/mugshots/Projects Page Mugshot.jpg"
import './homeDisplay.css'

const HomeDisplay = () => {
    const navigate = useNavigate()

    return (
        <div className="main">
            <h1 className="homeTitle">
            Hello there, and welcome to my page! I'm ecstatic to have you here. <br/>
            Please, have a look around; I'm certain you'll like what you see!
            </h1>
            <main className="homeDisplay">
                <button className="home--list" onClick={() => navigate("/history")}>
                    <HomeCard
                        imgUrl = {historyPageMugshot}
                        title = "History"
                    />
                </button>
                <button className="home--list" onClick={() => navigate("/projects")}>
                    <HomeCard
                        imgUrl = {projectsPageMugshot}
                        title = "Projects"
                    />
                </button>
                <button className="home--list" onClick={() => navigate("/contact")}>
                    <HomeCard
                        imgUrl = {homePageMugshot}
                        title = "Contact"
                    />
                </button>
            </main>
        </div>
    )
}

export default HomeDisplay