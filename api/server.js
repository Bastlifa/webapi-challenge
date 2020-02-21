const express = require('express')
const cors = require('cors')

const projectRouter = require('./projectRouter')
const actionRouter = require('./actionRouter')

const server = express()

server.use(express.json())
server.use(cors())
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.get('/', (req, res) =>
{
    res.status(200).json({ message: "Server is running" })
})

module.exports = server