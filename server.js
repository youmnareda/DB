const express = require('express');
const mongoose = require('mongoose');

let app = express();

// mongoose.connect("mongodb://0.0.0.0:27017/", (err)=> {
//     if (!err) console.log('DB now is connected');
//     else console.log(err);
// })


//   connect server to mongo server => local DB
async function connect() {
  let connection = await mongoose.connect('mongodb://0.0.0.0:27017/student');
  if (!connection) {
    console.log('noo')
  } else {
    console.log('DB now is connected')
  }
}
connect()

//  schema
const studentSchema = new mongoose.Schema({
  phone: {
    type: Number
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  age: {
    type: Number
  },
  address: {
    type: String
  },
  bio: {
    type: String
  }
});

// Create Model 
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


// insert
let newStudent = new Student({
  phone: 4565,
  password: 'password',
  name: "Yomna",
  age: 21,
  address: "address",
  bio: "bio"
}).save();

let MaiStudent = new Student({
  phone: 46488,
  password: 'password',
  name: "Mai",
  age: 22,
  address: "address",
  bio: "bio"
}).save();



//  schema  
const courseSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  Number: {
    type: Number
  }
});

// Create Model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

// insert
let newCourse = new Course({
  name: "courseName",
  description: "description of the course",
  Number: 1
}).save();

let anotherCourse = new Course({
  name: "courseName",
  description: "description of the course",
  Number: 1
}).save();

// endpoint fetch all student from database
app.get('/student', async (req, res) => {
  //Student.find()
  let allStudent = await Student.find();
  res.status(200);
  console.log(allStudent.length)
  res.json(allStudent)
})

// endpoint fetch all course from database
app.get('/course', async (req, res) => {
  let allCourse = await Course.find();
  res.status(200);
  console.log(allCourse.length)
  res.json(allCourse)
})

app.get('/' ,(req, res) =>{
  res.send("Welcome In Hell")
} )



app.listen(3000, function () {
  console.log('server now is opened')
})