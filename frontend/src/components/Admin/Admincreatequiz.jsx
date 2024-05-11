import React, { useEffect, useState } from 'react'
import InputBox from '../../parts/InputBox'
import Apppbar from '../../parts/Appbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import Button from '../../parts/Button'
const Admincreatequiz = () => {
  const navigate=useNavigate()
async function add(){
  console.log(question)
  const res=await axios.post('http://localhost:7777/quizq',{q:question,ans:a,o1:c1,o2:c2,o3:c3,o4:c4})
  console.log(res)
  window.location.reload()
}
async function save(){
  const res= await axios.post('http://localhost:7777/savequiz')
  navigate('/adminhome')
  console.log(res)
}
const [question,setQuestion]=useState("")
const [c1,setC1]=useState("");
const [c2,setC2]=useState("");
const [c3,setC3]=useState("");
const [c4,setC4]=useState("");
const [a,setA]=useState("");
  return (
    <>
    <Apppbar/>
    <div className='py-24'>
        <div className='bg-white mx-28 my-6 px-4 py-4 rounded-lg border-2  shadow-2xl flex flex-wrap w-192 h-full'>
          <InputBox onChange={(e)=>{setQuestion(e.target.value);console.log(question)}}label={'Question'} placeholder={'Write your question here!'}/>
          {/* <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/> */}
          <div className=' bg-slate-300 mx-28 my-6 px-4 py-4 rounded-lg border-2  shadow-2xl flex flex-wrap w-172 h-full'>
            <InputBox onChange={(e)=>{setC1(e.target.value)}}label={'Choice1'} placeholder={'Write your choices here!'}/>
            {/* <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/> */}
            <InputBox onChange={(e)=>{setC2(e.target.value)}} label={'Choice2'} placeholder={'Write your choices here!'}/>
            {/* <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/> */}
            <InputBox onChange={(e)=>{setC3(e.target.value)}} label={'Choice3'} placeholder={'Write your choices here!'}/>
            {/* <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/> */}
            <InputBox onChange={(e)=>{setC4(e.target.value)}} label={'Choice4'} placeholder={'Write your choices here!'}/>
            {/* <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/> */}
            <InputBox onChange={(e)=>{setA(e.target.value)}} label={'Answer'} placeholder={'Write your choices here!'}/>
          </div>
          <div className=' flex justify-center w-full gap-2'>
            <button onClick={add} className='w-96 text-white bg-black hover:bg-slate-800 rounded-md py-1.5'>Add question</button>
            <button onClick={save} className='w-96 text-white bg-black hover:bg-slate-800 rounded-md py-1.5'>Save quiz</button>

          </div>
          {/* <button className=' text-white bg-black hover:bg-slate-800 rounded-md my-3 w-full py-1.5'>Finish quiz</button> */}
        </div>
        </div>
    </>
  )
}

export default Admincreatequiz