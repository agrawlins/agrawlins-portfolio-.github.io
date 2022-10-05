import React, {useState, useContext, useEffect} from "react"
import HistoryCard from "../historyCard/historyCard"
import { AxiosContext } from "../../../context/AxiosContext";

const HistoriesDisplay = () => {
    
    const {character, historiesList, GetAllHistories} = useContext(AxiosContext) 

    useEffect(() => {GetAllHistories()}, [])

    const mappedHistoryList = historiesList.map((param1) => {
    return(
        <div>
            <ul>
                <HistoryCard {...param1} 
                    key = {param1.id}
                    id = {param1.id}
                    data = {historiesList}
                    img = {param1.image}
                />
            </ul>
        </div>
        )
    })

    return (
        <main className="homeDisplay">
            <div>
                <div className="ugly--display">
                    <h2>{character.title}</h2>
                    <img src={character.image} placeholder="Image"/>
                    <br/>
                    <h3>{character.year}</h3>
                    {character.description}
                    <br/>
                </div>
                <div className="uglyViewer"> 
                    <label>Select an Event to Learn More!</label>
                    <ul className="ul">
                        {mappedHistoryList}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default HistoriesDisplay