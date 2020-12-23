const express = require("express");
const app = express();
const port = 5555;

var cors = require("cors");
const petRouter = require("./routes/petRouter");
// ==============

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/pet", petRouter);

app.get("/pet", (req, res) => res.send("this is pet"));

app.listen(port, () => console.log(`Example app listening on port 5555!`));
