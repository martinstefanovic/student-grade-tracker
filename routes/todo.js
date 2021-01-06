const router = require('express').Router()
const Todo = require("../models/Todo");
// const Subject = require("../models/Subject");

// * routes
router.post("/add/todo", (req, res)=>{
    const {todo} = req.body;
    const {subject} = req.body;
    const {importantType} = req.body;
    const {title} = req.body;
    const newTodo = new Todo({todo: todo, subject: subject, importantType: importantType, title: title})

    // Save the todo
    newTodo.save().then(()=>{
        console.log('Uspesno dodavanje');
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err);
    })
})


module.exports = router;