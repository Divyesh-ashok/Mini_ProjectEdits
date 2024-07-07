import React from 'react'
import InputBox from '../../parts/InputBox'
import { useState } from 'react'
import Button from '../../parts/Button'
import Heading from '../../parts/Heading'
import axios from 'axios'
import Stunav from './Stunav'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


export default function Studentmagazine() {
const [title,setTitle]=useState("")
const [name,setName]=useState("")
const [file,setFile]=useState("")
const navigate=useNavigate()
axios.defaults.withCredentials=true
useEffect(()=>{
  axios.get("http://localhost:7777/studentverify").then(r=>{
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
        const formData=new FormData();
        formData.append("title",title);
        formData.append("file",file);
        formData.append("name",name)
        console.log(title,file)
        //const res=await axios.post("http://localhost:7777/studentmagazine",formData,{headers:{"Content-Type":"multipart/form-data"}})
        const res= axios.post("http://localhost:7777/upload-files",formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        console.log(res)
        window.location.reload()
        alert('submitted successfully')
      }

  return (
   <>
   <Stunav/>
    <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-3 w-96 bg-white shadow-lg rounded-lg">
            <Heading label={"MAGAZINE UPLOAD"}/>
              <InputBox onChange={(e)=>setTitle(e.target.value)} label={"TITLE"} placeholder={"......."}/>
              <InputBox onChange={(e)=>setName(e.target.value)} label={"NAME"} placeholder={"......."}/>
              <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file"/>
            <Button onClick={(e)=>{submitFile()}}label={"SUBMIT"}/>
        </div>
      </div>
    </div>
   
   </>
  )
}
