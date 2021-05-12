$(document).ready(function (){
    $("button#submit").on("click", addingStudent);
    $("button#sortName").on("click", theNamesMason);
    $("button#sortPercent").on("click", thePercentsMason);
});

let letterGrade;

let names = [];
let percents = [];

function addingStudent()
{
    let studentFName = $("input#fName").val()
    let studentLName = $("input#lName").val()
    let studentPEarned = parseFloat($("input#pEarned").val())
    let studentPPosssible = parseFloat($("input#pPossible").val())

    let percentage = Math.fround(studentPEarned / studentPPosssible * 100)


    if(percentage >= 95)
    {
        letterGrade = "A"
    }
    else if(percentage >= 85)
    {
        letterGrade = "B"
    }
    else if(percentage >= 75)
    {
        letterGrade = "C"
    }
    else if(percentage >= 65)
    {
        letterGrade = "D"
    }
    else if(percentage < 60)
    {
        letterGrade = "F"
    }


    let gradeBook = {
        firstName: studentFName,
        lastName: studentLName,
        iPercentage: percentage
    }

    //push to grade book to arrays
    names.push(gradeBook)
    percents.push(gradeBook)
}

//prints out things
function printTheNamesInOrder()
{
    $("p#gradeBook").empty()

    //loop through name array
    for(let aGradeBook of names)
    {
        let print = `first name:${aGradeBook.firstName}  last name:${aGradeBook.lastName}  Percent:${aGradeBook.iPercentage}
        grade:${letterGrade}`;

        $("p#gradeBook").append(print);
    }
}

function printThePercentsInOrder()
{
    $("p#gradeBook").empty()

    //loop through percents array
    for(let bGradeBook of percents)
    {
        dPrint = `first name:${bGradeBook.firstName} <br>last name:${bGradeBook.lastName} <br>Percent:${bGradeBook.iPercentage}
        <br>grade:${letterGrade}`;
    }

    $("p#gradeBook").append(dPrint);
}

function sortNames(a, b)
{
    if(a.firstName < b.firstName)
    {
        return -1
    }
    else if(a.firstName > b.firstName)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function theNamesMason()
{
    names.sort(sortNames)

    printTheNamesInOrder()
}

function sortingPercentsAgain(c, h)
{
    if (c.iPercentage < h.iPercentage)
    {
        return -1;
    }
    else if(c.iPercentage > h.iPercentage)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function thePercentsMason()
{
    percents.sort(sortingPercentsAgain)

    printThePercentsInOrder()
}