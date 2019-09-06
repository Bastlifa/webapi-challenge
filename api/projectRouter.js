const express = require('express')
const projectModel = require('../data/helpers/projectModel')
const cors = require('cors')

const router = express.Router()

router.use(express.json())
router.use(cors())

router.get('/', (req, res) =>
{
    projectModel.get()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "There was an error retrieving projects" })
            })
})

router.get('/:id', (req, res) =>
{
    projectModel.get(Number(req.params.id))
        .then(response =>
            {
                if(response) res.status(200).json(response)
                else res.status(404).json({ errorMessage: "No project with that ID" })
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "There was an error retrieving that project" })
            })
})

router.get('/:id/actions', (req, res) =>
{
    projectModel.getProjectActions(Number(req.params.id))
        .then(response =>
            {
                if(response) res.status(200).json(response)
                else res.status(404).json({ errorMessage: "No project with that ID" })
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "There was an error retrieving that project's actions" })
            })
})

router.post('/', (req, res) =>
{
    if(!req.body.name || !req.body.description)
    {
        res.status(400).json({ errorMessage: "Please provide name and description for project" })
    }
    else
    {
        projectModel.insert(req.body)
            .then(response =>
                {
                    res.status(201).json(response)
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: `There was an error inserting new project` })
                })
    }
})

router.put('/:id', (req, res) =>
{
    if(!req.body.name && !req.body.description)
    {
        res.status(400).json({ errorMessage: "Please provide name or description or both" })
    }
    else if(!req.params.id) res.status(400).json({ errorMessage: "Please provide id in url" })
    else
    {
        projectModel.update(Number(req.params.id), req.body)
            .then(response =>
                {
                    if(response) res.status(200).json(response)
                    else res.status(404).json({ errorMessage: `Could not find project with id ${req.params.id}`})
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: "Internal Error: Could not update project" })
                })
    }
})

router.delete('/:id', (req, res) =>
{
    const id = Number(req.params.id)
    projectModel.remove(id)
        .then(response =>
            {
                if(response)
                {
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ errorMessage: "Found no such project" })
                }
            })
        .catch(err =>
            {
                res.status(500).json({ errorMessage: `Internal Error: Could not delete project` })
            })
})

module.exports = router