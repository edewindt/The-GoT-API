require('dotenv').config()
const express = require('express')
const {graphQlHTTP} = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(cors())

app.listen(process.env.PORT, () =>{
    console.log("Server is working. PORT " + process.env.PORT)
})