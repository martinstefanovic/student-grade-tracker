const router = require("express").Router()
const Subject = require("../models/Subject");
const Todo = require("../models/Todo");

// * ROUTES
router.get("/stats", async (req, res)=>{
    const allSubjects = await Subject.find();
    const allTodos = await Todo.find();
    const page_name = 'stats';

    // ? General statistic
    let averageGrade = 0;
    let averageGoalGrade = 0;
    let numberOfGrades = 0;
    let numberOfTodos = 0;

    allSubjects.forEach((subject) => {
        averageGoalGrade += subject.goalGrade;
        if(subject.passed == true){
            averageGrade += subject.grade;
            numberOfGrades++;
        }
        let i = 0;
        allTodos.forEach( todo => {
            if(subject.subject === todo.subject){

            i++ 
            }
        }) 
        numberOfTodos+=i;
    });
    averageGrade = (averageGrade/numberOfGrades).toFixed(2);
    averageGoalGrade = (averageGoalGrade/ allSubjects.length).toFixed(2);

    // ? Task statistic
    const barChunk = 100/numberOfTodos;

    // ? Passed statistic
    const barPassedChunk = (100/ allSubjects.length) * numberOfGrades;

    res.render("stats", {
        allSubjects: allSubjects, 
        allTodos: allTodos, 
        page_name:page_name,
        averageGrade: averageGrade,
        averageGoalGrade: averageGoalGrade,
        barChunk: barChunk,
        barPassedChunk: barPassedChunk
    });
})

module.exports = router;