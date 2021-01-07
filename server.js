const express = require("express");
const app = express();
const port = process.env.PORT || 5555;

const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const petsRouter = require("./routes/petsRouter");

// ==============
// ==============
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// ==============
// ==============

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", userRouter);
app.use("/pets", petsRouter);

app.listen(port, () => console.log(`Listening on port 5555!`));
