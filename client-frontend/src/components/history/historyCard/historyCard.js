import React, {useState, useContext} from "react";
import { AxiosContext } from "../../../context/AxiosContext";

const HistoryCard = (props) => {
    const [historyCard, setHistoryCard] = useState({
        title: props.title,
        image: props.image,
        description: props.description,
    })
    const {GetOneCharacter} = useContext(AxiosContext)

  return(
    <div className="ugly--list" >
        <button key={props.id} id ={props.id} onClick={() => {GetOneCharacter(historyCard)}}>
            <img src={historyCard.image} className="ugly--image"/>
        </button>
    </div>    
  )
}

export default HistoryCard