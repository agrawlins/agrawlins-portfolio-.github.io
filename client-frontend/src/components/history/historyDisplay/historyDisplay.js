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
            <HistoryCard {...history} 
                key = {history.id}
                id = {history.id}
                data = {historiesList}
            />
        </div>
        )
    })

    return (
        <div className="body">
            <main className="historyDisplay">
                <div className="historyViewer"> 
                    <h1>History</h1>
                    <h3 className="historyHeader">Select an Event to Learn More!</h3>
                    <ul className="ul">
                        {mappedHistoryList}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default HistoryDisplay