import React, {useState, useContext, useEffect} from "react"
import HistoryCard from "../historyCard/historyCard"
import { AxiosContext } from "../../../context/AxiosContext";
import './historyDisplay.css'

const HistoryDisplay = () => {
    
    const {history, historiesList, GetAllHistories} = useContext(AxiosContext) 

    useEffect(() => {GetAllHistories()}, [])

    const mappedHistoryList = historiesList.map((history) => {
    return(
        <div>
            <ul>
                <HistoryCard {...history} 
                    key = {history.id}
                    id = {history.id}
                    data = {historiesList}
                />
            </ul>
        </div>
        )
    })

    return (
        <main className="historyDisplay">
            <div>
                <div className="history--display">
                    <h2>{history.title}</h2>
                    <img src={history.image} placeholder="Image"/>
                    <br/>
                    <h3>{history.year}</h3>
                    {history.description}
                </div>
                <div className="historyViewer"> 
                    <label>Select an Event to Learn More!</label>
                    <ul className="ul">
                        {mappedHistoryList}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default HistoryDisplay