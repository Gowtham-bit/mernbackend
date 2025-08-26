const express = require('express');
const controller = require('./controller')
const app = express();
app.use(express.json());
app.post('/insert', controller.insertdata);
app.get('/getAllStudents', controller.getAllStudents);
app.get('/getStudentByRollNo', controller.getStudentByRollNo);
app.get('/getStudentByname', controller.getStudentByname);
app.get('/getStudentBydept', controller.getStudentBydept);
app.get('/getStudentByyear', controller.getStudentByyear);
app.delete('/deleteStudent', controller.deleteStudent);
app.put('/update',controller.updatedata)
app.listen(3000);