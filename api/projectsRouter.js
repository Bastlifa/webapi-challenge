const express = require('express')
const projectModel = require('../data/helpers/projectModel')

const router = express.Router()
router.use(express.json())

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
    projectModel.get(req.params.id)
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
