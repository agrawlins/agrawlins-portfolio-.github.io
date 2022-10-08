import React, {useState, useContext} from "react";
import { AxiosContext } from "../../../context/AxiosContext";
import './historyCard.css'

const HistoryCard = (props) => {
  const {id, title, image, year, description} = props
  const [editToggle, setEditToggle] = useState(false)
  const [historyCard, setHistoryCard] = useState({
      title: title,
      image: image,
      year: year,
      description: description,
  })
  const {GetOneHistory} = useContext(AxiosContext)

  return(
    <div className="history--list" >
        { !editToggle ? 
        <>
          <button className="history-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            <img src={historyCard.image} className="history--image"/>
          </button>
        </>
        :
        <>   
          <button className="history-opn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            <h1>{title}</h1>
            <p>{year}</p>
            <img src={image}></img> 
            <p>{description}</p>
          </button>
        </>
        }
    </div>    
  )
}

export default HistoryCard