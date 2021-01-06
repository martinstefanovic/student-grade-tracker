const express = require("express");
const mongoose = require("mongoose");

const app = express();


// * Connection to mongodb
mongoose.connect("mongodb://localhost/todo_express",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// * Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
app.set("view engine", "ejs");


// * Routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.use(require("./routes/subjects"))
app.use(require("./routes/todolists"))
app.use(require("./routes/stats"))

// * Server config
app.listen(3000, () => console.log("Server started listening on port 3000"))