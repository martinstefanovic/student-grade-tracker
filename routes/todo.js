const router = require('express').Router()
const Todo = require("../models/Todo");


// * ROUTES
router.post("/add/todo", (req, res)=>{
    const {todo} = req.body;
    const {subject} = req.body;
    const {importantType} = req.body;
    const {title} = req.body;
    const {completed} = req.body;
    const newTodo = new Todo({
        todo: todo,
        subject: subject, 
        importantType: importantType, 
        title: title,
        completed: completed
    })

    // Save the todo
    newTodo.save().then(()=>{
        console.log('Uspesno dodavanje');
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err);
    })
})

// ? Update todo
.get('/todo/update/:_id/:completed', function(req, res) {
    const {_id} = req.params;
    const {completed} = req.params;

    const completedState = !((completed == 'true') ? true : false);
    console.log(_id);
    Todo.updateOne({_id:_id}, {completed: completedState}, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
    res.redirect("/todolists")
});


module.exports = router;