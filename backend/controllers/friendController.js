const Friend = require("../models/friendmodel");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const formidable = require("formidable");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// get all friends
const getFriends = async (req, res) => {
  const allfriends = await Friend.find({}).sort({ createdAt: -1 });

  res.status(200).json(allfriends);
};

//get one friend
const getFriend = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not in friendlist" });
  }

  const onefriend = await Friend.findById(id);

  if (!onefriend) {
    friendName;
    return res.status(404).json({ message: "Not in friendlist" });
  }

  res.status(200).json(onefriend);
};

// add new friend
const addFriend = async (req, res) => {
  // try {
  //   const form = formidable.formidable({});

  //   form.parse(req, async (err, fields, files) => {
  //     if (err) {
  //       next(err);
  //       return;
  //     }

  //     //   console.log(files);
  //     //   console.log(fields);
  //     try {
  //       const memberName = fields.memberName[0];
  //       const branch = fields.branch[0];
  //       const rollNum = fields.rollNum[0];
  //       const year = fields.year[0];
  //       const birthday = fields.birthday[0];
  //       const image = files.image[0];

  //       //   upload image
  //       const uploadImage = await cloudinary.uploader.upload(image.filepath);
  //       console.log(uploadImage);

  //       const member = await Member.create({
  //         memberName,
  //         branch,
  //         year,
  //         birthday,
  //         image: uploadImage.secure_url,
  //       });
  //       res.status(200).json(member);
  //       //   res.status(200);
  //     } catch (error) {
  //       res.status(400).json({ error: error.message });
  //     }
  //   });
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not in friendlist" });
  }

  const onefriend = await Friend.findById(id);

  if (!onefriend) {
    return res.status(404).json({ message: "Not in friendlist" });
  }

  res.status(200).json(onefriend);
};

// remove friend
const removeFriend = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found" });
  }

  const friend = await Friend.findByIdAndDelete(id);

  if (!friend) {
    return res.status(404).json({ error: "Not found" });
  }

  res.status(200).json(friend);
};

module.exports = {
  getFriends,
  getFriend,
  addFriend,
  removeFriend,
};
