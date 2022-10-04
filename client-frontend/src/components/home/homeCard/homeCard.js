import React, {useState, useContext} from "react";
import { AxiosContext } from "../Context/AxiosContext";

const HomeCard = (props) => {
    const [homecard, setHomeCard] = useState({
        title: props.title,
        imgUrl: props.imgUrl
    })
    const [edit, setEdit] = useState(false)
    const {PutOne, DeleteOne} = useContext(AxiosContext)

  return(
    <div key={props.id} id ={props.id}>
      <img src={homecard.imgUrl} placeholder={props.title} className="home--image" />
      <h2 className="HomeCardText">{homecard.title}</h2>
    </div>    
  )
}

export default HomeCard