import React, {useState, useContext, useEffect} from "react"
import ProjectCard from "../projectCard/projectCard"
import { AxiosContext } from "../../../context/AxiosContext";
import './projectDisplay.css'

const HistoryDisplay = () => {
    const {history, projectsList, GetAllProjects} = useContext(AxiosContext) 

    useEffect(() => {GetAllProjects()}, [])

    const mappedProjectsList = projectsList.map((history) => {
    return(
        <div>
            <ProjectCard {...history} 
                key = {history.id}
                id = {history.id}
                data = {projectsList}
            />
        </div>
        )
    })

    return (
        <div className="body">
            <main className="historyDisplay">
                <div className="projectViewer"> 
                    <h1>Projects</h1>
                    <h3 className="projectHeader">Select a Project to Learn More!</h3>
                    <ul className="ul">
                        {mappedProjectsList}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default HistoryDisplay