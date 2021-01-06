const router = require("express").Router()
const Subject = require("../models/Subject");
const Todo = require("../models/Todo");

// * ROUTES
router
.get("/todolists", async (req, res)=>{
    const allTodos = await Todo.find();
    const allSubjects = await Subject.find();
    const page_name = 'todolists';
    
    res.render("todolists", {allTodos: allTodos, allSubjects: allSubjects, page_name: page_name});
})

// ? Delete subject
.get("/todolists/delete/:_id", (req, res)=>{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log('Uspesno obrisan predmet');
        res.redirect("/todolists")
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;