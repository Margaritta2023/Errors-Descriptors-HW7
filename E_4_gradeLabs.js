function gradeLabs (labs) {

    let result = Math.pow(5, 5)
    labs.forEach(element => {
        let studentRes = 0;
        try{
            studentRes = element.runLab(5)
        }
        catch(error) {
            console.log(`${element.student} Error thrown`)
        }
        if(studentRes !== result) console.log(`${element.student} lab failed`);
        else console.log(`${element.student} lab passed`) 
    });
}


let studentLabs2 = [
    {
    student: "Blake",
    myCode: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Mya",
    runLab: function (num) {
    return num * num;
    },
    },
    ];
    console.log(gradeLabs(studentLabs2));