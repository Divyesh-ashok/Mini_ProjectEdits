import React from 'react'
import InputBox from '../../parts/InputBox'
import { useState } from 'react'
import Button from '../../parts/Button'
import Heading from '../../parts/Heading'
import axios from 'axios'
import Apppbar from '../../parts/Appbar'
export default function Admincreateevent() {
const [ename,setEname]=useState("")
const [content,setContent]=useState("")
const [link,setLink]=useState("")
const [file,setFile]=useState("")
const submitFile=async (e)=>{
    console.log("hii")
    console.log(link)
    const formData=new FormData();
    formData.append("ename",ename);
    formData.append("content",content);
    formData.append("link",link);
    formData.append("file",file);
   // console.log(ename,content,file,link)
    //const res=await axios.post("http://localhost:7777/studentmagazine",formData,{headers:{"Content-Type":"multipart/form-data"}})
    const res=await axios.post("http://localhost:7777/eventposters",formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    console.log(res)
    alert('submitted successfully')
}
  return (
   <>
   <Apppbar/>
    <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-3 w-96 bg-white shadow-lg rounded-lg">
            <Heading label={"NEW EVENT"}/>
              <InputBox onChange={(e)=>setEname(e.target.value)} label={"Event Name"} placeholder={"......."}/>
              <InputBox onChange={(e)=>setContent(e.target.value)} label={"Content"} placeholder={"......."}/>
              <InputBox onChange={(e)=>setLink(e.target.value)} label={"Link"} placeholder={"......."}/>
              <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/>
            <Button onClick={(e)=>{submitFile()}}label={"SUBMIT"}/>
        </div>
      </div>
    </div>
   
   </>
  )
}
