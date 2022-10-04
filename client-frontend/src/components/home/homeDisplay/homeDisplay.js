import React from "react"
import {useNavigate, Link} from 'react-router-dom';
import Logo from "../../Images/Psychonauts-Logo-Color.png"
import HomeCard from "./HomeCard"

const HomeDisplay = () => {
    const navigate = useNavigate()

    return (
        <main className="homeDisplay">
            <div>
                <img src={Logo} />
            </div>
            <div>
                <button className="ugly--list" onClick={() => navigate("/characters")}>
                    <HomeCard
                        imgUrl = "https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png"
                        title = "Characters"
                    />
                </button>
                <button className="ugly--list" onClick={() => navigate("/abilities")}>
                    <HomeCard
                        imgUrl = "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png"
                        title = "Abilities"
                    />
                </button>
                <button className="ugly--list" onClick={() => navigate("/summary")}>
                    <HomeCard
                        imgUrl = "https://psychonauts-api.herokuapp.com/images/api/characters/ford-cruller.png"
                        title = "Summary"
                    />
                </button>
            </div>
        </main>
    )
}

export default HomeDisplay