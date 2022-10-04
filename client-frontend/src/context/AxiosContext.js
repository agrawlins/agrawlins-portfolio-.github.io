import React, {useState, createContext} from "react"
import axios from "axios"

const AxiosContext = createContext()

const AxiosContextProvider = (props) => {
    const baseURL = "https://psychonauts-api.herokuapp.com/api/characters"
    const basePSIURL = "https://psychonauts-api.herokuapp.com/api/powers"

    const [character, setHistory] = useState({
        gender: "male",
        img: "https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png",
        name: "razputin aquato",
        psiPowers: [
            {
                "description": "Allows the user to see through the minds of others.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png",
                "_id": "60b545a812a35d412cf0fa45",
                "name": "clairvoyance"
              },
              {
                "description": "Allows the user to confuse enemies.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/confusion.png",
                "_id": "60b545a812a35d412cf0fa46",
                "name": "confusion"
              },
              {
                "description": "Allows the user to turn invisible for a short period of time.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/invisibility.png",
                "_id": "60b545a812a35d412cf0fa47",
                "name": "invisibility"
              },
              {
                "description": "Allows the user to levitate using a levitation ball.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/levitation.png",
                "_id": "60b545a812a35d412cf0fa48",
                "name": "levitation"
              },
              {
                "description": "Allows the user to strike things down using their mind.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/marksmanship.png",
                "_id": "60b545a812a35d412cf0fa49",
                "name": "marksmanship"
              },
              {
                "description": "Allows the user to break objects using their mind.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/psi-punch.jpg",
                "_id": "60b545a812a35d412cf0fa4a",
                "name": "psi-punch"
              },
              {
                "description": "Allows the user to set objects on fire using their mind.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/pyrokinesis.png",
                "_id": "60b545a812a35d412cf0fa4b",
                "name": "pyrokinesis"
              },
              {
                "description": "Allows the user to create a psychic shield.",
                "img": "https://psychonauts-api.herokuapp.com/images/api/shield.png",
                "_id": "60b545a812a35d412cf0fa4c",
                "name": "shield"
              },
              {
                description: "Allows the user to move objects with their mind.",
                img: "https://psychonauts-api.herokuapp.com/images/api/telekinesis.png",
                _id: "60b545a812a35d412cf0fa4d",
                name: "telekinesis"
              }
        ]
    })
    const [project, setProject] = useState({
        description: "Allows the user to see through the minds of others.",
        img: "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png", 
        name: "clairvoyance"
    })

    const [charactersList, setHistorysList] = useState([])
    const [abilitiesList, setAbilitiesList] = useState([])

    const GetAllCharacters = () => {
        axios.get(`${baseURL}`)
        .then(res => {
            console.log(res.data, "Getting All Characters")
            setHistorysList(res.data)
        })
        .catch(err => console.log(err))
    }

    const GetOneCharacter = (character) => {
        axios.get(`${baseURL}?name=${character.name}`)
        .then(res => {
            console.log(res.data, "Getting One Character")
            setHistory(res.data)
        })
        .catch(err => console.log(err))
    }

    const GetAllAbilities = () => {
        axios.get(`${basePSIURL}`)
        .then(res => {
            console.log(res.data, "Getting All Abilities")
            setAbilitiesList(res.data)
        })
        .catch(err => console.log(err))
    }

    const GetOneproject = (project) => {
        axios.get(`${basePSIURL}?name=${project.name}`)
        .then(res => {
            console.log(res.data, "Getting One Character")
            setProject(res.data)
        })
        .catch(err => console.log(err))
    }
    
    return(
        <AxiosContext.Provider value={{
            project, setProject,
            character, setHistory,
            abilitiesList, setAbilitiesList,
            charactersList, setHistorysList,
            GetAllCharacters,
            GetOneCharacter,
            GetAllAbilities,
            GetOneproject,
          }}>
            {props.children}
          </AxiosContext.Provider>
    )
}

export {AxiosContext, AxiosContextProvider}