// importing express module
const express = require('express')

const router = express.Router()

const {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController')



// handling request using router
// GET all blogs
router.get('/', getBlogs)



// GET one blog
router.get('/:id', getBlog)



//POST one blog
router.post('/', createBlog)



// DEL blog
router.delete('/:id', deleteBlog)



// UPDATE a blog
router.patch('/:id', updateBlog)



module.exports = router