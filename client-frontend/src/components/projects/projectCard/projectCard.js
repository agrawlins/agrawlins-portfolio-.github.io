import React, {useState, useContext} from "react";
import { AxiosContext } from "../../../context/AxiosContext";

const ProjectCard = (props) => {
  const {id, title, image, year, description} = props
  const [projectCard, setProjectCard] = useState({
      title: title,
      image: image,
      year: year,
      description: description,
  })
  const {GetOneCharacter} = useContext(AxiosContext)

  return(
    <div className="ugly--list" >
        <button key={id} id={id} onClick={() => {GetOneCharacter(projectCard)}}>
            <img src={projectCard.image} className="ugly--image"/>
        </button>
    </div>    
  )
}

export default ProjectCard