import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Heading from '../parts/Heading'
import InputBox from '../parts/InputBox';
import { useNavigate } from 'react-router-dom';
import Button from '../parts/Button';
import axios from 'axios';
import Warning from '../parts/Warning';
export default function Signin() {
    const [role,setRole] = useState("STUDENT");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    axios.defaults.withCredentials = true;
    const navigate=useNavigate()
    async function Signin(){

        if(role==="STUDENT")
        {
        const res=await axios.post("http://localhost:7777/student/signin",{email,password})
        console.log(res)
            if(res.data!=0)
            {
                 navigate('/stuhome') 
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
        else if(role==="TEACHER")
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
        else if(role==="ALUMNI")
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
        else if(role==="ADMIN")
        {
            const res=await axios.post("http://localhost:7777/admin/signin",{email,password}) 
            if(res.data===1)
            {
                navigate('/adminhome');
            }  
            else
            {
                alert("wrong credentials")
            }     
        }
       
    }
    
    return (
    <>
    <div className='h-max bg-slate-200'>
    <div className='bg- h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-96 p-2 h-max px-4 shadow-2xl">
                <Heading label={"SIGN IN"}/>
                <select name="option" value={role} onChange={(e)=>{setRole(e.target.value)}} className='rounded-md w-full px-2 py-2 border border-slate-200 mt-2 text-lg bg-slate-200'>
                    <option value="STUDENT">STUDENT</option>
                    <option value="TEACHER">TEACHER</option>
                    <option value="ALUMNI">ALUMNI</option>
                    <option value="ADMIN">ADMIN</option>
                </select>
                <InputBox onChange={(e)=>{setEmail(e.target.value)}}label={"USERNAME"} placeholder={"user@gmail.com"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}}label={"PASSWORD"} placeholder={"......"} type={"password"}/>
                <div className="pt-4">
                <Button onClick={(e)=>{Signin()}} label={"SIGN IN"}/>
                <Link className='pointer underline pl-1 cursor-pointer text-slate-400 hover:text-slate-500' to='/forgotpassword'>Forgot Password?</Link>
                <Warning label={"Don't have an account?"} buttonText={"Sign up"} to={"/intermmediate"}/>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
    
  )
}
