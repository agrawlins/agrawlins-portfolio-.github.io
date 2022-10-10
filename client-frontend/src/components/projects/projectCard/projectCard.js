import React, {useState, useContext} from "react";
import { AxiosContext } from "../../../context/AxiosContext";
import './projectCard.css'

const ProjectCard = (props) => {
  const {id, title, image, gitHub, description} = props
  const [editToggle, setEditToggle] = useState(false)
  const [projectCard, setProjectCard] = useState({
      title: title,
      image: image,
      gitHub: gitHub,
      description: description,
  })
  const {GetOneProject} = useContext(AxiosContext)

  return(
    <div className="project--list" >
        { !editToggle ? 
        <>
          <button className="project-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            <img src={projectCard.image} className="project--image"/>
          </button>
        </>
        :
        <>   
          <button className="project-opn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            <h1>{title}</h1>
            <img src={image} className='project-opn-img'></img> 
            <p>{description}</p>
            <a href={gitHub} target='blank' className="github-link">View the Code on GitHub</a>
          </button>
        </>
        }
    </div>    
  )
}

export default ProjectCard