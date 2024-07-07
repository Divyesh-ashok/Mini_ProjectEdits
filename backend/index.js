const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const {student,teacher,alumni,course,magazine,events,qcollect,quizq,studymaterial} = require("./db");
const multer=require('multer')
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
require('dotenv').config()
var cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken');

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(express.json());
app.use("/files",express.static("files"))
app.use("/posters",express.static("posters"))
app.use(cookieParser())
//students
//--------
//add quiz
app.post('/quizq',async(req,res)=>{
    console.log("hii")
    console.log(req.body)
    const quiz=await quizq.create({quiz:req.body})
    res.json(quiz)
})
app.post('/savequiz',async(req,res)=>{
    console.log("hii")
    const quiz=await quizq.find({})
    //console.log(quiz)
    const result=new qcollect({quizes:quiz})
    result.save()
    await quizq.deleteMany({})
    console.log(result)
    res.json(result)
})
//
app.get('/getquiz',async(req,res)=>{
    console.log("hii")
    const quiz=await qcollect.find({})
    console.log(quiz)
    res.json(quiz)
})
//
app.post('/getquiz',async(req,res)=>{
    console.log(req.body.id)
const response=await qcollect.find({_id:req.body.id})
console.log(response)
res.json(response)
})
//singnup
app.post('/student/signup',async (req,res)=>{
    console.log("signup")
    const {email,password,firstname,lastname,joindate,passdate}=req.body;
    const user=await student.findOne({email:req.body.email})
    if(user){
        return res.json({message:"email alredy exists/invalid inputs"})
    }
    const hashpassword=await bcrypt.hash(password, 10)
    const dbuser=await student.create({
        email,
        password: hashpassword,
        firstname,
        lastname,
        joindate,
        passdate
    });
    console.log(dbuser);
    return res.json(1)

})
//signin
app.post('/student/signin',async (req,res)=>{
    console.log(req.body.username)
    console.log(req.body.password)
    const {email,password} = req.body;
    const user=await student.findOne({email:email})
    console.log('user=',user)
    if(!user){
        res.json(0)
    }
    else
    {
        const validpassword = await bcrypt.compare(password, user.password)
        console.log(validpassword)
        if(!validpassword)
        {
                res.json(0)
        }
        else
        {
            console.log('username=',user._id)
            const token = jwt.sign({username: user._id}, process.env.KEY,{expiresIn: '1h'})
            res.cookie('token', token, {httpOnly: true, maxAge: 360000})
            res.json(user)
        }
    }
   // console.log("unsuccessfull")
})


const studentverifyUser=async(req,res,next)=>{
    
    try{
        const token=req.cookies.token;
        if(!token){
            return res.json(0)
        }
        else
        {
            const decoded=await jwt.verify(token,process.env.KEY);  
            console.log('decoded=',decoded.username) 
            const user=await student.findOne({_id: decoded.username})
            if(!user){
                res.json(0)
            }
            else{   
                next()
            }
        }
    }
    catch(err){
        console.log(err)
        return res.json(0)
    }
};
    
app.get('/studentverify',studentverifyUser, async(req,res)=>{
    return res.json(1)
});


const teacherverifyUser=async(req,res,next)=>{
    
    try{
        const token=req.cookies.token;
        if(!token){
            return res.json(0)
        }
        else
        {
            const decoded=await jwt.verify(token,process.env.KEY);  
            console.log('decoded=',decoded.username) 
            const user=await teacher.findOne({_id: decoded.username})
            if(!user){
                res.json(0)
            }
            else{   
                next()
            }
        }
    }
    catch(err){
        console.log(err)
        return res.json(0)
    }
};

app.get('/teacherverify',teacherverifyUser, async(req,res)=>{
    return res.json(1)
});



const alumniverifyUser=async(req,res,next)=>{
    
    try{
        const token=req.cookies.token;
        if(!token){
            return res.json(0)
        }
        else
        {
            const decoded=await jwt.verify(token,process.env.KEY);  
            console.log('decoded=',decoded.username) 
            const user=await alumni.findOne({_id: decoded.username})
            if(!user){
                res.json(0)
            }
            else{   
                next()
            }
        }
    }
    catch(err){
        console.log(err)
        return res.json(0)
    }
};

app.get('/alumniverify',alumniverifyUser, async(req,res)=>{
    return res.json(1)
});


const adminverifyUser=async(req,res,next)=>{
    
    try{
        const token=req.cookies.token;
        if(!token){
            return res.json(0)
        }
        else
        {
            const decoded=await jwt.verify(token,process.env.KEY);  
            console.log('decoded=',decoded.username) 
            if(decoded.username!=process.env.ADE){
                res.json(0)
            }
            else{   
                next()
            }
        }
    }
    catch(err){
        console.log(err)
        return res.json(0)
    }
};

app.get('/adminverify',adminverifyUser, async(req,res)=>{
    return res.json(1)
});





app.get('/logout',async(req,res)=>{
    res.clearCookie('token')
    res.json(1)
});



app.post('/student/forgot', async(req,res)=>{
    const {email}=req.body
    const user=await student.findOne({email:email})
    console.log(user)
    if(!user){
        res.json(0)
    }
    else{
        const token=jwt.sign({id: user._id},process.env.KEY, {expiresIn: '5m'})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nexusminiproject@gmail.com',
                pass: 'fwco gmxd bead sqxi'
            }
        });
        
        var mailOptions = {
            from: 'nexusminiproject@gmail.com',
            to: email,
            subject: 'Reset password link',
            text: `http://localhost:5173/resetpassword/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.json(1)
    }
});

app.post('/teacher/forgot', async(req,res)=>{
    const {email}=req.body
    const user=await teacher.findOne({email:email})
    console.log(user)
    if(!user){
        res.json(0)
    }
    else{
        const token=jwt.sign({id: user._id},process.env.KEY, {expiresIn: '5m'})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nexusminiproject@gmail.com',
                pass: 'fwco gmxd bead sqxi'
            }
        });
        
        var mailOptions = {
            from: 'nexusminiproject@gmail.com',
            to: email,
            subject: 'Reset password link',
            text: `http://localhost:5173/teacherresetpassword/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.json(1)
    }
});

app.post('/alumni/forgot', async(req,res)=>{
    const {email}=req.body
    const user=await alumni.findOne({email:email})
    console.log(user)
    if(!user){
        res.json(0)
    }
    else{
        const token=jwt.sign({id: user._id},process.env.KEY, {expiresIn: '5m'})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nexusminiproject@gmail.com',
                pass: 'fwco gmxd bead sqxi'
            }
        });
        
        var mailOptions = {
            from: 'nexusminiproject@gmail.com',
            to: email,
            subject: 'Reset password link',
            text: `http://localhost:5173/alumniresetpassword/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.json(1)
    }
});






app.post('/student/resetpassword/:token', async(req,res)=>{
    const {token}=req.params;
    const {password}=req.body;
    try{
        const decoded=await jwt.verify(token,process.env.KEY);
        const id=decoded.id;
        console.log(id)
        const hashpassword=await bcrypt.hash(password,10);
        const user=await student.findOneAndUpdate({"_id": id}, {"password": hashpassword})
        res.json(1)
    }
    catch(err){
        console.log(err)
        res.json(0)
    }
});

app.post('/teacher/resetpassword/:token', async(req,res)=>{
    const {token}=req.params;
    const {password}=req.body;
    try{
        const decoded=await jwt.verify(token,process.env.KEY);
        const id=decoded.id;
        console.log(id)
        const hashpassword=await bcrypt.hash(password,10);
        const user=await teacher.findOneAndUpdate({"_id": id}, {"password": hashpassword})
        res.json(1)
    }
    catch(err){
        console.log(err)
        res.json(0)
    }
});

app.post('/alumni/resetpassword/:token', async(req,res)=>{
    const {token}=req.params;
    const {password}=req.body;
    try{
        const decoded=await jwt.verify(token,process.env.KEY);
        const id=decoded.id;
        console.log(id)
        const hashpassword=await bcrypt.hash(password,10);
        const user=await alumni.findOneAndUpdate({"_id": id}, {"password": hashpassword})
        res.json(1)
    }
    catch(err){
        console.log(err)
        res.json(0)
    }
});


//get all students
app.get('/student',async(req,res)=>{
    const users=await student.find({})
    res.json(users)
})
//file upload for magazine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix+"-"+file.originalname)
    }
  })

const upload = multer({ storage: storage })
app.post("/upload-files",upload.single("file"),async(req,res)=>{
    const title=req.body.title;
    const filename=req.file.filename
    console.log(req.body.name)
    console.log(filename)
    console.log(title)
    try{
            const result=await magazine.create({title:title,filename:filename,creator:req.body.name})
            res.send(result)
        }catch(err){
        res.json(err)
    }
})
app.post("/studymaterial",upload.single("file"),async(req,res)=>{
    console.log(req.body)
    const subject=req.body.subject;
    const semester=req.body.semester;
    console.log(subject[0])
    const filename=req.file.filename
    console.log(filename)
    try{
            const result=await studymaterial.create({subject:subject[0],semester:subject[1],filename:filename,creator:"teacher"})
            res.send(result)
        }catch(err){
        res.json(err)
    }
})

//file uplaod for event posterss
const st1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './posters')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix+"-"+file.originalname)
    }
  })
  
const up1 = multer({ storage: st1 })
app.post("/eventposters",up1.single("file"),async(req,res)=>{
    const ename=req.body.ename;
    const content=req.body.content;
    const link=req.body.link;
    const filename=req.file.filename;
    console.log(ename,content,link,filename)
    console.log(filename)
    try{
            const result=await events.create({ename:ename,content:content,link:link,poster:filename})
            res.send(result)
        }catch(err){
        res.json(err)
    }
})


app.get("/magazine",async(req,res)=>{
    try {
        const data= await magazine.find({})
        return res.json(data)
    } catch (error) {
        console.log(err)
    }
})
app.get("/studymaterial",async(req,res)=>{
    try {
        const data= await studymaterial.find({})
        return res.json(data)
    } catch (error) {
        console.log(err)
    }
})


app.get("/getposters",async(req,res)=>{
    try {
        const data= await events.find({})
        return res.json(data)
    } catch (error) {
        console.log(err)
    }
})

app.delete('/student/:id',async(req,res)=>{
    console.log("delete")
    console.log(req.params.id)
    await student.deleteOne({_id:req.params.id})
})
//teachers
//--------

//singnup
app.post('/teacher/signup',async (req,res)=>{
    console.log("teachersignup")
    const {email,password,firstname,lastname,subject,joindate}=req.body;
    const user=await teacher.findOne({email:email})
    console.log(user)
    if(user){
        return res.json({message:"email alredy exists/invalid inputs"})
    }
    const hashpassword=await bcrypt.hash(password, 10)
    const dbuser=await teacher.create({
        email,
        password: hashpassword,
        firstname,
        lastname,
        subject,
        joindate
    });
    return res.json(1)

})
//signin
app.post('/teacher/signin',async (req,res)=>{
    console.log(req.body.email)
    console.log(req.body.password)
    const {email,password} = req.body;
    const user=await teacher.findOne({email:email})
    console.log(user)
    if(!user){
       res.json(0)
       console.log('username')
    }
    else{
        const validpassword = await bcrypt.compare(password, user.password)
        console.log(validpassword)
        if(!validpassword)
        {
                res.json(0)
                console.log('password')
        }
        else
        {
            const token = jwt.sign({username: user._id}, process.env.KEY,{expiresIn: '1h'})
            res.cookie('token', token, {httpOnly: true, maxAge: 360000})
            res.json(user)
        }
    }
   // console.log("unsuccessfull")
})
//get all teacheers
app.get('/teacher',async(req,res)=>{
    const users=await teacher.find({})
    res.json(users)
})
//techers providing courses
app.post('/courses',async(req,res)=>{
    console.log(req.body.description)
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const creator=req.body.creator;
    const googleMeet=req.body.googleMeet;
    const newCourse=await course.create({
        title,
        description,
        imageLink,
        creator,
        googleMeet
    })
    res.json(newCourse)
})
//get the courses that teachers provided
app.get('/courses',async(req,res)=>{
    const courses=await course.find({creator:req.body.creator})
    res.json(courses);
})
app.delete('/teacher/:id',async(req,res)=>{
    console.log("delete")
    console.log(req.params.id)
    await teacher.deleteOne({_id:req.params.id})
})





//alumni
//-------
//signup
app.post('/alumni/signup',async (req,res)=>{
    console.log("teachsignup")
    const {email,password,firstname,lastname,passdate,contactdetails,specialization}=req.body;
    const user=await alumni.findOne({email:req.body.email})
    if(user){
        return res.json({message:"email alredy exists/invalid inputs"})
    }
    const hashpassword=await bcrypt.hash(password, 10)
    const dbuser=await alumni.create({
        email,
        password: hashpassword,
        firstname,
        lastname,
        passdate,
        contactdetails,
        specialization
    });
    return res.json(1)

})
//signin
app.post('/alumni/signin',async (req,res)=>{
    console.log(req.body.username)
    console.log(req.body.password)
    const {email,password} = req.body;
    const user=await alumni.findOne({email:email})
    console.log(user.data)
    if(!user){
       return res.json(0)
    }
    else{
        const validpassword = await bcrypt.compare(password, user.password)
        console.log(validpassword)
        if(!validpassword)
        {
                res.json(0)
        }
        else
        {
            const token = jwt.sign({username: user._id}, process.env.KEY,{expiresIn: '1h'})
            res.cookie('token', token, {httpOnly: true, maxAge: 360000})
            res.json(user)
        }
    }
})



app.post('/admin/signin',async (req,res)=>{
    const {email,password} = req.body;
    if(email===process.env.ADE){
        if(password===process.env.ADP){
            const token = jwt.sign({username: email}, process.env.KEY,{expiresIn: '1h'})
            res.cookie('token', token, {httpOnly: true, maxAge: 360000})
            res.json(1)
        }
        else{
            res.json(0)
        }
    }
    else{
        res.json(0)
    }
})

//get all alumini
app.get('/alumni',async(req,res)=>{
    const users=await alumni.find({})
    res.json(users)
})
app.get('/alumniconnect',async(req,res)=>{
    const filter=req.query.filter || "";
    const alumnis=await alumni.find({
        
            specialization:{
                "$regex":filter
            }
        
    })
    res.json({
        alumnis:alumnis.map(alumnis=>({
            email:alumnis.email,
            firstname:alumnis.firstname,
            lastname:alumnis.lastname,
            contactdetails:alumnis.contactdetails,
            _id:alumnis._id,
            specialization:alumnis.specialization
        }))

    })
})
app.delete('/alumni/:id',async(req,res)=>{
    console.log("delete")
    console.log(req.params.id)
    await alumni.deleteOne({_id:req.params.id})
})

// add quiz


app.listen(7777,()=>{
    console.log("listening")
})



