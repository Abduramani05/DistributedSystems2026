const express = require('express');
const sequelize = require('./config/database')
const Student = require('./models/Student')

const app = express();

app.use(express.json());

//Get
app.get('/students',async (req,res) => {
    const students = await Student.findAll();

    res.json(students);
})

//Create
app.post('/student',async (req,res)=> {
    const student = await Student.create(req.body);
    res.json(student);
})

//GetById - lab
//if there is no student with that id
//respond with error
//otherwise return the  object



function start(){
    try{
        sequelize.sync();
        app.listen(3005,()=> {
            console.log("I am running on port 3005")
        })
    }
    catch{
        console.log("Error")
    }
}

start()