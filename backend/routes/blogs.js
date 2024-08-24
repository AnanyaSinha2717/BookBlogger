// importing express module
const express = require('express')

const router = express.Router()

const Blog = require('../models/blogmodel')

// handling request using router
// GET one blog
router.get('/', (req, res) => {
    res.json({mssg: "get all blogs"})
    // next()
})

// GET one blog
router.get('/:id', (req, res) => {
    res.json({mssg: 'get one blog'})
})

//POST one blog
router.post('/', async (req, res) => {
    
    const {title, date, chapter, pageNumbers, characters, entry} = req.body

    try{
        const blog = await Blog.create({title, date, chapter, pageNumbers, characters, entry})
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error: error.message})
    }

})

// DEL blog
router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete one blog'})
})

// UPDATE a blog
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update a blog'})
})

module.exports = router