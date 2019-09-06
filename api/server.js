const express = require('express')

const projectsRouter = require('./projectsRouter')
const actionsRouter = require('./actionsRouter')

const server = express()

server.use(express.json())
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) =>
{
    res.status(200).json({ message: "Server is running" })
})

module.exports = server