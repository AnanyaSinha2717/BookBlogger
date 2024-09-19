const express = require("express");

const router = express.Router();

const {
  getFriends,
  getFriend,
  addFriend,
  removeFriend,
} = require("../controllers/friendController");

// handling request using router
// GET all friends
router.get("/", getFriends);

// GET one friend
router.get("/:id", getFriend);

//add a friend
router.post("/", addFriend);

// remove friend
router.delete("/:id", removeFriend);

module.exports = router;
