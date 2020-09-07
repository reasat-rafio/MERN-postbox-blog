require("./db");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(4000, () => console.log(`Server started at 4000`));
