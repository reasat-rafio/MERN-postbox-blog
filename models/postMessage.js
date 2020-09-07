const mongoose = require("mongoose");

const PostMessage = mongoose.model("PostMessage", {
  title: { type: String },
  message: { type: String },
});

module.exports = { PostMessage };
