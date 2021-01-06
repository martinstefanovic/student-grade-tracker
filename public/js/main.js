
    $(document).ready(function(){

        // * Darkmode logic
        let darkModeToggleButton = $('#darkmodeToggle');

        let darkModeFunc = {
            enable: ()=>{
                darkModeToggleButton.prop('checked', 'checked')
                $('body').addClass('darkmode');
            },
            disable: ()=>{
                $('body').removeClass('darkmode');
            }
        }

        let darkMode = window.localStorage.getItem('darkmode');

        if(darkMode == 'true'){
            darkModeFunc.enable();
        }else{
            darkModeFunc.disable();
        }
        
        darkModeToggleButton.on('change', function () { 
            console.log('klik');
            if($(this).prop('checked')){
                window.localStorage.setItem('darkmode', 'true');
                darkModeFunc.enable();
            }else{
                window.localStorage.setItem('darkmode', 'false');
                darkModeFunc.disable();
            }
        })


        // * Update subject on todolists page
        let chosenSubject = {
            _id: 0,
            grade: 0,
            goalGrade: 0,
            passed: false
        }

        let subjectIdField = $("#subjectIdField");
        let subjectStatusField = $("#subjectStatus");
        let goalGradeField = $("#goalGrade");
        let gradeField = $("#grade");

        $( ".btn-edit" ).on( "click", function() {
            chosenSubject._id = $(this).data('subject-id');
            chosenSubject.grade = $(this).data('subject-grade');
            chosenSubject.goalGrade = $(this).data('subject-goal-grade');
            chosenSubject.passed = $(this).data('status');

            subjectIdField.attr('value', `${chosenSubject._id}`)
            goalGradeField.attr('value', `${chosenSubject.goalGrade}`)
            gradeField.attr('value', `${chosenSubject.grade}`)
        });



    })