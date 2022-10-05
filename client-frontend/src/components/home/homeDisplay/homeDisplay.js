import React from "react"
import {useNavigate, Link} from 'react-router-dom';
import HomeCard from "../homeCard/homeCard"
import './homeDisplay.css'

const HomeDisplay = () => {
    const navigate = useNavigate()

    return (
        <main className="homeDisplay">
            <div>
                <button className="ugly--list" onClick={() => navigate("/history")}>
                    <HomeCard
                        imgUrl = "https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png"
                        title = "History"
                    />
                </button>
                <button className="ugly--list" onClick={() => navigate("/projects")}>
                    <HomeCard
                        imgUrl = "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png"
                        title = "Projects"
                    />
                </button>
                <button className="ugly--list" onClick={() => navigate("/contact")}>
                    <HomeCard
                        imgUrl = "https://psychonauts-api.herokuapp.com/images/api/characters/ford-cruller.png"
                        title = "Contact"
                    />
                </button>
            </div>
        </main>
    )
}

export default HomeDisplay