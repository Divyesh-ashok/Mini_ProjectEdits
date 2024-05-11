const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nexusminiproject:lf0TtLhexPPXf8wv@cluster0.aqk1jt0.mongodb.net/")
//studentSchema
const studentSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:3
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    joindate:{
        type:String,
        required:true,
    },
    passdate:{
        type:String,
        required:true
    },
    coursesselected:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courses'
    }]

})
const teacherSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:3
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    joindate:{
        type:String,
        required:true,
    },
    coursesoffered:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courses'
    }]
})
const alumniSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:3
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    contactdetails:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
        
    }
})
const courseSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    googleMeet:String,
    creator:String
})
const magazineSchema=mongoose.Schema({
    filename:String,
    title:String,
    creator:String
})
const studymaterialSchema=mongoose.Schema({
    filename:String,
    subject:String,
    semester:String,
    creator:String
})
const eventSchema=mongoose.Schema({
    poster:String,
    ename:String,
    content:String, 
    link:String   
})

const questionSchema=mongoose.Schema({
        q:String,
       // qi:String,
        ans:String,
        o1:String,
       // oi1:String,
        o2:String,
        //oi2:String,
        o3:String,
       // oi3:String,
        o4:String,
        //oi4:String
})

const quizSchema=mongoose.Schema({
    quiz:[questionSchema]
})

const qcollectionSchema=mongoose.Schema({
    quizes:[quizSchema]
})


const alumni=mongoose.model('alumni',alumniSchema)
const student=mongoose.model('student',studentSchema)
const teacher=mongoose.model('teacher',teacherSchema)
const course=mongoose.model('course',courseSchema)
const magazine=mongoose.model('magazine',magazineSchema)
const events=mongoose.model('events',eventSchema)
const qcollect=mongoose.model('qcollect',qcollectionSchema)
const quiz=mongoose.model('quiz',quizSchema)
const quizq=mongoose.model('quizq',quizSchema)
const studymaterial=mongoose.model('studymaterial',studymaterialSchema)
module.exports ={student,alumni,teacher,course,magazine,events,qcollect,quizq,studymaterial}
