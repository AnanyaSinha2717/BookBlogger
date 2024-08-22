// importing express module
const express = require('express')

const router = express.Router()

// handling request using router
// GET one workout
router.get('/', (req, res) => {
    res.json({mssg: "get all workouts"})
    // next()
})

// GET one workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'get one workout'})
})

//POST one workout
router.post('/', (req, res) => {
    res.json({mssg: 'post new workout'})
})

// DEL workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete one workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update a workout'})
})

module.exports = router