import React, {useState, createContext} from "react"
import axios from "axios"

const AxiosContext = createContext()

const AxiosContextProvider = (props) => {
    const baseURL = process.env.PORTFOLIO_PWD

    const [history, setHistory] = useState()
    const [project, setProject] = useState()

    const [historiesList, setHistoriesList] = useState([])
    const [projectsList, setProjectsList] = useState([])

    const GetAllHistories = () => {
        axios.get(`${baseURL}/histories`)
        .then(res => {
            console.log(res.data, "Getting All Highlights")
            setHistoriesList(res.data)
        })
        .catch(err => console.log(err))
    }

    const GetOneHistory = (history) => {
        axios.get(`${baseURL}/histories?title=${history.title}`)
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
            {props.children}
          </AxiosContext.Provider>
    )
}

export {AxiosContext, AxiosContextProvider}