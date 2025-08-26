let data = [];
function getStudentByRollNo(req, res) {
    console.log("[INFO] Entered into Get Student By Roll No");
    const rollno = req.body.rollno;
    const student = data.find(student => student.rollno === rollno);
    if (student) {
        console.log("[SUCCESS] Student Found");
        res.status(200).send(student);
    } else {
        console.log("[ERROR] Student Not Found");
        res.status(404).send("Student Not Found");
    }
}
function getStudentByyear(req, res) {
    console.log("[INFO] Entered into Get Student By Roll No");
    const year = req.body.year;
    const student = data.find(student => student.year === year);
    if (student) {
        console.log("[SUCCESS] Student Found");
        res.status(200).send(student);
    } else {
        console.log("[ERROR] Student Not Found");
        res.status(404).send("Student Not Found");
    }
}function getStudentByname(req, res) {
    console.log("[INFO] Entered into Get Student By Roll No");
    const name = req.body.name;
    const student = data.find(student => student.name === name);
    if (student) {
        console.log("[SUCCESS] Student Found");
        res.status(200).send(student);
    } else {
        console.log("[ERROR] Student Not Found");
        res.status(404).send("Student Not Found");
    }
}
function getStudentBydept(req, res) {
    console.log("[INFO] Entered into Get Student By Roll No");
    const dept = req.body.dept;
    const student = data.find(student => student.dept === dept);
    if (student) {
        console.log("[SUCCESS] Student Found");
        res.status(200).send(student);
    } else {
        console.log("[ERROR] Student Not Found");
        res.status(404).send("Student Not Found");
    }
}
function getAllStudents(req, res) {
    console.log("[INFO] Entered into Get All Students");
    res.send(data);
}
function insertdata(req, res) {
    console.log("[INFO] Entered into Insert Data");
    let isDuplicate = checkIfDataIsPresent(req.body.rollno);
    if(!isDuplicate) {
        console.log("[INFO] No Duplicate Found");
        data.push(req.body);
        console.log("[SUCCESS] Data Inserted Successfully");
        res.send('Data Inserted');
    }
    else {
        console.log("[INFO] Duplicate Record Found");
        res.send("Record Already Exists");
    }
}
function  checkIfDataIsPresent(rollno) {
    for(let i of data) {
        if(i.rollno === rollno) {
            return true;
        }
    }
    return false;
}
function deleteStudent(req, res) {
    let rollno = req.body.rollno;
    let index = data.findIndex(s => s.rollno === rollno);
    if (index !== -1) {
        data.splice(index, 1);
        res.send("Student Deleted");
    } else {
        res.status(404).send("Student Not Found");
    }
}
function updatedata(req,res){
    let rollno = req.body.rollno;
    let index = data.findIndex(s => s.rollno === rollno);
    if(index!==-1){
        data[index]=req.body;
        res.send("Student Updated");
    }else{
        res.status(404).send("Student Not Found");
    }
}
module.exports = {getStudentByRollNo, insertdata, deleteStudent, getAllStudents,updatedata,getStudentBydept,getStudentByname,getStudentByyear};