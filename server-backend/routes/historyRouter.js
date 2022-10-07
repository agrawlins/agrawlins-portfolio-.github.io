const express = require('express')
const historyRouter = express.Router()
const History = require('../models/history.js')
const mongoose = require('mongoose')

//GET ALL
historyRouter.get("/", (req, res, next) => {
    History.find((err, histories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(histories)
    })
})

//GET ONE
historyRouter.get("/:historyId", (req, res, next) => {
    console.log(req.body)
    History.findById((err, history) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(history)
    })
})

//GET BY TITLE
historyRouter.get("/search/title", (req, res, next) => {
    History.find({title: req.query.title}, (err, histories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(histories)
    })
})

//POST
historyRouter.post("/", (req, res, next) => {
    const newHistory = new History(req.body)
    newHistory.save((err, savedHistory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedHistory)
    })
})

//PUT
historyRouter.put("/:historyId", (req, res, next) => {
    History.findOneAndUpdate(
        {_id: req.params.historyId},
        req.body,
        {new: true},
        (err, updatedHistory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`${updatedHistory}`)
    })
})

//DELETE
historyRouter.delete("/:historyId", (req, res, next) => {
    History.findOneAndDelete(
        {_id: req.params.historyId}, 
        (err, deletedHistory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedHistory.title} from the database!`)
    })
})

module.exports = historyRouter