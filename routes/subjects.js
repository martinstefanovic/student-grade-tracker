const router = require("express").Router()
const Subject = require("../models/Subject")

// * ROUTES

// ? Default
router.get("/subjects", async (req, res)=>{
    const allSubjects = await Subject.find();
    const page_name = 'subjects';

    res.render("subjects", {subjects: allSubjects, page_name:page_name});
})

// ? Add subject
router
.post("/subjects/add", (req, res)=>{
    const {goalGrade} = req.body;
    const {subject} = req.body;
    const {grade} = req.body;
    const newSubject = new Subject({goalGrade: goalGrade, subject: subject, grade:grade})

    // Save the subject
    newSubject.save().then(()=>{
        console.log('Uspesno dodavanje predmeta');
        res.redirect("/subjects")
    })
    .catch((err)=>{
        console.log(err);
    })
})

// ? Delete subject
.get("/subjects/delete/:_id", (req, res)=>{
    const {_id} = req.params;
    Subject.deleteOne({_id})
    .then(()=>{
        console.log('Uspesno obrisan predmet');
        res.redirect("/subjects")
    })
    .catch(err => {
        console.log(err);
    })
})

// ? Update subject
.post('/subjects/update', function(req, res) {
    const {_id} = req.body;
    const {passed} = req.body;
    const {grade} = req.body;
    const {goalGrade} = req.body;
    console.log(_id);
    Subject.updateOne({_id}, {grade: grade, passed: passed, goalGrade: goalGrade}, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
    res.redirect("/todolists")
});

module.exports = router;