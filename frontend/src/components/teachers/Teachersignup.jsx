import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Heading from '../../parts/Heading'
import InputBox from '../../parts/InputBox'
import Button from '../../parts/Button'
//import Signup from './Signup'
import { useNavigate } from 'react-router-dom'
export default function Teacherssignup() {
const navigate=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [firstname,setFirstname]=useState('')
const [lastname,setLastname]=useState('')
const [joindate,setJoindate]=useState('')
const [subject,setSubject]=useState('')  
async function Signupteacher(){
    console.log("hello")
    const res= await axios.post("http://localhost:7777/teacher/signup",{email,password,firstname,lastname,subject,joindate})
    console.log(res)
     if (res.data==1){
       navigate('/')
     }
   }
return (
    <>
        <div className='h-max bg-slate-200'>
    <div className='bg- h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-96 p-2 h-max px-4 shadow-2xl">
                <Heading label={"TEACHER SIGNUP"}/>
                <InputBox onChange={(e)=>{setEmail(e.target.value)}}label={"USERNAME"} placeholder={"user@gmail.com"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}}label={"PASSWORD"} placeholder={"......"} type={"password"}/>
                <InputBox onChange={(e)=>{setFirstname(e.target.value)}}label={"FIRSTNAME"} placeholder={"......"}/>
                <InputBox onChange={(e)=>{setLastname(e.target.value)}}label={"LASTNAME"} placeholder={"......"}/>
                

                <InputBox onChange={(e)=>{setJoindate(e.target.value)}} label={"JOINING DATE"} placeholder={"2019"} type={"date"}/>
                <InputBox onChange={(e)=>{setSubject(e.target.value)}} label={"SUBJECT"} placeholder={"......."} type={""}/>
                <div className="pt-4">
                <Button onClick={(e)=>Signupteacher()} label={"SIGN IN"}/>
              
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}