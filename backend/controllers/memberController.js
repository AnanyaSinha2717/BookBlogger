const Member = require('../models/membermodel')
const mongoose = require('mongoose')



// get all members
const getMembers = async (req, res) => {
    const allmembers = await Member.find({}).sort({ createdAt: -1 })

    res.status(200).json(allmembers)
}

//get one member
const getMember = async (req, res) => {

    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Member not found" })
    }

    const onemember = await Member.findById(id)

    if (!onemember) {
        return res.status(404).json({ message: "Member not found" })
    }

    res.status(200).json(onemember)
}

// add new member
const addMember = async (req, res) => {
    const { memberName, branch, year, birthday, image } = req.body


    try {
        const member = await Member.create({ memberName, branch, year, birthday, image })
        res.status(200).json(member)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


// remove member
const removeMember = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Member not found" })
    }

    const member = await Member.findByIdAndDelete(id)

    if (!member) {
        return res.status(404).json({ error: "Member not found" })
    }

    res.status(200).json(member)
}


// update member info
const updateMember = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Member not found" })
    }

    const member = await Member.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new:true})

    if (!member) {
        return res.status(404).json({ error: "Member not found" })
    }

    res.status(200).json(blog)
}

module.exports = {
    getMembers,
    getMember,
    addMember,
    removeMember,
    updateMember
}