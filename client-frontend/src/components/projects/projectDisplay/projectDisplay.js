import React, {useState, useContext, useEffect} from "react"
import ProjectCard from "../projectCard/projectCard"
import { AxiosContext } from "../../../context/AxiosContext";

const ProjectDisplay = () => {
    const {project, projectsList, GetAllProjects} = useContext(AxiosContext) 

    useEffect(() => {GetAllProjects()}, [])

    const mappedProjectList = projectsList.map((project) => {
    return(
        <div>
            <ul>
                <ProjectCard {...project} 
                    key = {project.id}
                    id = {project.id}
                    data = {projectsList}
                />
            </ul>
        </div>
        )
    })

    return (
        <main className="homeDisplay">
            <div>
                <div className="ugly--display">
                    <h2>{project.title}</h2>
                    <img src={project.image} placeholder="Image"/>
                    <br/>
                    <h3>{project.year}</h3>
                    {project.description}
                </div>
                <div className="uglyViewer"> 
                    <label>Select an Event to Learn More!</label>
                    <ul className="ul">
                        {mappedProjectList}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default ProjectDisplay