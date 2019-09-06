const express = require('express')
const actionModel = require('../data/helpers/actionModel')
const projectModel = require('../data/helpers/projectModel')

const router = express.Router()
router.use(express.json())

const validateProjectId = (req, res, next) =>
{
    if(!req.params.id) res.status(400).json({ errorMessage: `Missing Project ID` })
    const id = req.params.id
    projectModel.get(id)
        .then(response =>
            {
                if(response)
                {
                    req.project = response
                    next()
                }
                else res.status(400).json({ errorMessage: "Invalid project id" })
            })
        .catch(err =>
            {
                res.status(500).json({ errorMessage: "Internal Error, could not retrieve project" })
            })
}

router.get('/', (req, res) =>
{
    actionModel.get()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "There was an error retrieving actions" })
            })
})

router.get('/:id', (req, res) =>
{
    actionModel.get(req.params.id)
        .then(response =>
            {
                if(response) res.status(200).json(response)
                else res.status(404).json({ errorMessage: "No action with that ID" })
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "There was an error retrieving that action" })
            })
})

router.post('/', (req, res) =>
{
    if(!req.body.name || !req.body.description)
    {
        res.status(400).json({ errorMessage: "Please provide name and description for action" })
    }
    else
    {
        actionModel.insert(req.body)
            .then(response =>
                {
                    res.status(201).json(response)
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: `There was an error inserting new action` })
                })
    }
})

router.put('/:id', (req, res) =>
{
    if(!req.body.name && req.body.description)
    {
        res.status(400).json({ errorMessage: "Please provide name or description or both" })
    }
    else if(!req.params.id) res.status(400).json({ errorMessage: "Please provide id in url" })
    else
    {
        actionModel.update(req.params.id, req.body)
            .then(response =>
                {
                    if(response) res.status(200).json(response)
                    else res.status(404).json({ errorMessage: `Could not find action with id ${req.params.id}`})
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: "Internal Error: Could not update action" })
                })
    }
})

router.delete('/:id', (req, res) =>
{
    const id = req.params.id
    actionModel.remove(id)
        .then(response =>
            {
                if(response)
                {
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ errorMessage: "Found no such action" })
                }
            })
        .catch(err =>
            {
                res.status(500).json({ errorMessage: `Internal Error: Could not delete action` })
            })
})

module.exports = router