const mongoose = require('mongoose') //mongoose allows to create models and schemas\

const Schema = mongoose.Schema


// for making an array of paragraphs
// const paragraphs = new Schema({
//     title: {
//         type:String,
//         required: true
//     },

//     body: {
//         type: String
//     }
// })

// blog on a normal day
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    date: {
        type: Date, default: Date.now
    },

    chapter: {
        type: Number
    },

    pageNumbers: {
        type: Number
    },

    // characters: [paragraphs],
    characters: {
        type: String
    },

    entry: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)