const express = require("express");
const router = express.Router();

const { PostMessage } = require("../models/postMessage");

router.get("/", (req, res) => {
  postMessage.find((err, docs) => {
    if (!err) res.send(docs);
  });
});

module.exports = router;
