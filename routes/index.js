const router = require("express").Router()
const Subject = require("../models/Subject");
const Todo = require("../models/Todo");

// * ROUTES
router.get("/", async (req, res)=>{
    const allSubjects = await Subject.find();
    const lastTodo = await Todo.find().limit(1).sort({$natural:-1});
    const page_name = 'home';
    res.render("index", {
        subjects: allSubjects, 
        lastTodo: lastTodo, 
        page_name:page_name
    });
})

module.exports = router;