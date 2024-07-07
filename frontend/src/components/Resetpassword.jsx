import React, { useState } from 'react'
import Heading from '../parts/Heading'
import InputBox from '../parts/InputBox';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../parts/Button';
import axios from 'axios';

const Resetpassword = () => {
    const [password,setPassword]=useState("");
    const {token}=useParams()
    const navigate=useNavigate()
    axios.defaults.withCredentials = true;
    async function submit(){
        const res=await axios.post("http://localhost:7777/student/resetpassword/"+token,{password})
        console.log('res=',res.data)
        if(res.data===1){
            alert('Password Reset successfull')
            navigate('/')
        }
        else if(res.data===0){
            alert('Password reset not successfull')
        }
    }
  return (
    <>
    <div className='h-max bg-slate-200'>
    <   div className='bg- h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className="rounded-lg text-center bg-white w-96 p-2 h-max px-4 shadow-2xl">
                <Heading label={"RESET PASSWORD"}/>
                <InputBox onChange={(e)=>{setPassword(e.target.value)}}label={"NEW PASSWORD"} placeholder={"......"} type={"password"}/>
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

export default Resetpassword