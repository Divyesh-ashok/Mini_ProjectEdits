import React from 'react'
import { useState } from 'react'
import Heading from '../parts/Heading'
import InputBox from '../parts/InputBox';
import { useNavigate } from 'react-router-dom';
import Button from '../parts/Button';
import axios from 'axios';
const Forgotpassword = () => {
    const [role,setRole] = useState("STUDENT");
    const [email, setEmail] = useState("");
    axios.defaults.withCredentials = true;
    const navigate=useNavigate()
    async function submit(){
        console.log(role)
        if(role==="STUDENT"){
            const res=await axios.post("http://localhost:7777/student/forgot",{email})
            console.log('res=',res)
            if(res.data===1){
                alert('Check your Email for password link')
                navigate('/')
            }
            else if(res.data===0){
                alert('Email Id not Registered')
            }
        }
        if(role==="TEACHER"){
            const res=await axios.post("http://localhost:7777/teacher/forgot",{email})
            console.log('res=',res)
            if(res.data===1){
                alert('Check your Email for password link')
                navigate('/')
            }
            else if(res.data===0){
                alert('Email Id not Registered')
            }
        }
        if(role==="ALUMNI"){
            const res=await axios.post("http://localhost:7777/alumni/forgot",{email})
            console.log('res=',res)
            if(res.data===1){
                alert('Check your Email for password link')
                navigate('/')
            }
            else if(res.data===0){
                alert('Email Id not Registered')
            }
        }
    }

  return (
    <>
        <div className='h-max bg-slate-200'>
    <div className='bg- h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-96 p-2 h-max px-4 shadow-2xl">
                <Heading label={"FORGOT PASSWORD"}/>
                <select name="option" value={role} onChange={(e)=>{setRole(e.target.value)}} className='rounded-md w-full px-2 py-2 border border-slate-200 mt-2 text-lg bg-slate-200'>
                    <option value="STUDENT">STUDENT</option>
                    <option value="TEACHER">TEACHER</option>
                    <option value="ALUMNI">ALUMNI</option>
                </select>
                <InputBox onChange={(e)=>{setEmail(e.target.value)}}label={"USERNAME"} placeholder={"user@gmail.com"}/>
                <div className="pt-4">
                <Button onClick={(e)=>{submit()}} label={"SUBMIT"}/>
                </div>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default Forgotpassword