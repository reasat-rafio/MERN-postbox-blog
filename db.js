const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/postManagerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
