const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {mongoose} = require("./databaseConfig.js");
const userService = require("./services/user.service.js")
const guitarService = require("./services/guitar.service.js")
var app = express();

app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:4200"}));

app.listen(3000, () => console.log("Server started at port: 3000"));

app.use("/user",userService);
app.use("/guitar",guitarService);



