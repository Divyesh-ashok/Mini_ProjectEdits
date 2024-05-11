import React from 'react'
import { useState } from 'react'
import Heading from '../parts/Heading'
import InputBox from '../parts/InputBox';
import { useNavigate } from 'react-router-dom';
import Button from '../parts/Button';
import axios from 'axios';
import Warning from '../parts/Warning';
export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    async function Signin(){
        
        if(email.includes("user"))
        {
        const res=await axios.post("http://localhost:7777/student/signin",{email,password})
        console.log(res)
            if(res.data!=0)
            {
                 navigate('/stuhome')
                 console.log(res.data.user.firstname)
                 localStorage.setItem("firstname",res.data.user.firstname)
                 localStorage.setItem("email",res.data.user.email)
                 localStorage.setItem("lastname",res.data.user.lastname)
                 localStorage.setItem("joindate",res.data.user.joindate)
            }
            else
            {
                alert("wrong credentials")
            }
        }
        else if(email.includes("teacher"))
        {
        const res=await axios.post("http://localhost:7777/teacher/signin",{email,password})
        console.log(res)
            if(res.data!=0)
            {
                navigate('/teachhome')
                localStorage.setItem("firstname",res.data.firstname)
                localStorage.setItem("email",res.data.email)
                localStorage.setItem("lastname",res.data.lastname)
                localStorage.setItem("joindate",res.data.joindate)
            }
        else
            {
                alert("wrong credentials")
            }
        }
        else if(email.includes("alumni"))
        {
        const res=await axios.post("http://localhost:7777/alumni/signin",{email,password})
        console.log(res)
            if(res.data!==0)
            {
                navigate('/alumnihome')
                localStorage.setItem("firstname",res.data.firstname)
                localStorage.setItem("email",res.data.email)
                localStorage.setItem("lastname",res.data.lastname)
                localStorage.setItem("joindate",res.data.joindate)
            }
        else
            {
                alert("wrong credentials")
            }
        }
        else if(email.includes("admin"))
            {
                navigate('/adminhome')
            }
       
    }
    
    return (
    <>
    <div className='h-max bg-slate-200'>
    <div className='bg- h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-96 p-2 h-max px-4 shadow-2xl">
                <Heading label={"SIGN IN"}/>
                <InputBox onChange={(e)=>{setEmail(e.target.value)}}label={"USERNAME"} placeholder={"user@gmail.com"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}}label={"PASSWORD"} placeholder={"......"} type={"password"}/>
                <div className="pt-4">
                <Button onClick={(e)=>{Signin()}} label={"SIGN IN"}/>
                <Warning label={"Don't have an account?"} buttonText={"Sign up"} to={"/intermmediate"}/>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
    
  )
}
