// const { json } = require('express')
const express = require('express')
const knex = require('./config/db_connection.js')
const app = express()
const port = 3000

const router = require("./Router/main")

app.use(express.json())

app.use(router)






app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))