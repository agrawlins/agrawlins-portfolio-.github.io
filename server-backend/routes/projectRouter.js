const express = require('express')
const projectRouter = express.Router()
const Project = require('../models/project.js')
const mongoose = require('mongoose')

//GET ALL
projectRouter.get("/", (req, res, next) => {
    Project.find((err, projects) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(projects)
    })
})

//GET ONE
projectRouter.get("/:projectId", (req, res, next) => {
    console.log(req.body)
    Project.findById((err, project) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(project)
    })
})

//GET BY CATEGORY
projectRouter.get("/search/category", (req, res, next) => {
    Project.find({category: req.query.category}, (err, projects) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(projects)
    })
})

//POST
projectRouter.post("/", (req, res, next) => {
    const newProject = new Project(req.body)
    newProject.save((err, savedProject) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProject)
    })
})

//PUT
projectRouter.put("/:projectId", (req, res, next) => {
    Project.findOneAndUpdate(
        {_id: req.params.projectId},
        req.body,
        {new: true},
        (err, updatedProject) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`${updatedProject}`)
    })
})

//DELETE
projectRouter.delete("/:projectId", (req, res, next) => {
    Project.findOneAndDelete(
        {_id: req.params.projectId}, 
        (err, deletedProject) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedProject.title} from the database!`)
    })
})

module.exports = projectRouter