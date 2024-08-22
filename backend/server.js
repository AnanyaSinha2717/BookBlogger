require('dotenv').config()
const express = require('express')

const workoutRoutes = require('./routes/workouts')

const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json) // checks if req has body, if it does, then passes it to database
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes => {

})


// connecting to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    });


