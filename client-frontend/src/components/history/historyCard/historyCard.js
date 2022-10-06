import React, {useState, useContext} from "react";
import { AxiosContext } from "../../../context/AxiosContext";
import './historyCard.css'

const HistoryCard = (props) => {
  const {id, title, image, year, description} = props
  const [historyCard, setHistoryCard] = useState({
      title: title,
      image: image,
      year: year,
      description: description,
  })
  const {GetOneHistory} = useContext(AxiosContext)

  return(
    <div className="history--list" >
        <button key={id} id={id} onClick={() => {GetOneHistory(historyCard)}}>
            <img src={historyCard.image} className="history--image"/>
        </button>
    </div>    
  )
}

export default HistoryCard