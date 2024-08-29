const Blog = require('../models/blogmodel')
const mongoose = require('mongoose')


// get all blogs
const getBlogs = async (req, res) => {
    const allblogs = await Blog.find({}).sort({ createdAt: -1 })

    res.status(200).json(allblogs)
}

//get one blog
const getBlog = async (req, res) => {

    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No soch blog" })
    }

    const oneblog = await Blog.findById(id)

    if (!oneblog) {
        return res.status(404).json({ message: "No Such Blog" })
    }

    res.status(200).json(oneblog)
}


//post new blog
const createBlog = async (req, res) => {
    const { title, date, chapter, pageNumbers, characters, entry } = req.body

    // add doc to body
    try {
        const blog = await Blog.create({ title, date, chapter, pageNumbers, characters, entry })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



//delete a blog
const deleteBlog = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such blog" })
    }

    const blog = await Blog.findByIdAndDelete(id)

    if (!blog) {
        return res.status(404).json({ error: "No suchp blog" })
    }

    res.status(200).json(blog)
}



//update a blog
const updateBlog = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such blog" })
    }

    const blog = await Blog.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new:true})

    if (!blog) {
        return res.status(404).json({ error: "No suchp blog" })
    }

    res.status(200).json(blog)
}


module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}