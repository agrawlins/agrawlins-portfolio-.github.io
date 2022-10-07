import React, {useState, createContext} from "react"
import axios from "axios"

const AxiosContext = createContext()

const AxiosContextProvider = (props) => {
    const baseURL = "http://localhost:3000"
    const {title, image, year, description, children} = props

    const [history, setHistory] = useState({
        key: {},
        title: "Birth of a Legend",
        image: "https://images.unsplash.com/photo-1596252732610-fce5ac542f8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        year: 1993,
        description: "Adam Rawlins was born on November 11th, 1993 to David and Vonna Rawlins at the Natrona County Hospital in Casper, Wyoming.",
    })
    const [project, setProject] = useState({

    })

    const [historiesList, setHistoriesList] = useState([])
    const [projectsList, setProjectsList] = useState([])

    const GetAllHistories = () => {
        axios.get(`${baseURL}/history`)
        .then(res => {
            console.log(res.data, "Getting All Highlights")
            setHistoriesList(res.data)
        })
        .catch(err => console.log(err))
    }

    const GetOneHistory = (history) => {
        axios.get(`${baseURL}/history/search/title?title=${history.title}`)
        .then(res => {
            console.log(res.data, "Getting One Highlight")
            setHistory(res.data)
        })
        .catch(err => console.log(err))
    }

    const GetAllProjects = () => {
        axios.get(`${baseURL}/projects`)
        .then(res => {
            console.log(res.data, "Getting All Projects")
            setProjectsList(res.data)
        })
        .catch(err => console.log(err))
    }

    const GetOneProject = (project) => {
        axios.get(`${baseURL}/projects?title=${project.title}`)
        .then(res => {
            console.log(res.data, "Getting One Project")
            setProject(res.data)
        })
        .catch(err => console.log(err))
    }
    
    return(
        <AxiosContext.Provider value={{
            project, setProject,
            history, setHistory,
            projectsList, setProjectsList,
            historiesList, setHistoriesList,
            GetAllHistories,
            GetOneHistory,
            GetAllProjects,
            GetOneProject,
          }}>
            {children}
          </AxiosContext.Provider>
    )
}

export {AxiosContext, AxiosContextProvider}