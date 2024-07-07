import React from 'react'
import InputBox from '../../parts/InputBox'
import { useState } from 'react'
import Button from '../../parts/Button'
import Heading from '../../parts/Heading'
import axios from 'axios'
import {toast} from 'react-toastify'
import Tenav from './Tenav'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function Teacherstudymaterial() {
const [subject,setSubject]=useState("")
const [semester,setSemester]=useState("")
const [file,setFile]=useState("")
const navigate=useNavigate()
axios.defaults.withCredentials=true
useEffect(()=>{
  axios.get("http://localhost:7777/teacherverify").then(r=>{
  console.log('r=',r)
  if(r.data==1)
    {
      
    }
    else{
      navigate('/')
    }
  });
},[])
const submitFile=async (e)=>{
    console.log("hii")
    const formData=new FormData();
    formData.append("subject",subject);
    formData.append("subject",semester);
    formData.append("file",file);
    console.log(subject,semester,file)
    //const res=await axios.post("http://localhost:7777/studentmagazine",formData,{headers:{"Content-Type":"multipart/form-data"}})
    const res=await axios.post("http://localhost:7777/studymaterial",formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    console.log(res)
    alert('submitted successfully')
    toast.success("submitted successfully")
    window.location.reload()
}
  return (
   <>
   <Tenav/>
    <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-3 w-96 bg-white shadow-lg rounded-lg">
            <Heading label={"UPLOAD STUDY MATERIAL"}/>
              <InputBox onChange={(e)=>setSubject(e.target.value)} label={"Subject"} placeholder={"......."}/>
              <InputBox onChange={(e)=>setSemester(e.target.value)} label={"Semester"} placeholder={"......."}/>
              <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file"/>
            <Button onClick={(e)=>{submitFile()}}label={"SUBMIT"}/>
        </div>
      </div>
    </div>
   
   </>
  )
}
