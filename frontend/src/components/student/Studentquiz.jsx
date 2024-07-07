import React, { useEffect,useState } from 'react'
import Stunav from './Stunav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Studentquiz() {
    // let i=0
    const navigate = useNavigate()
    const [q,setQ]=useState([])
    useEffect(() =>{
        console.log("hi")
        axios.get("http://localhost:7777/studentverify").then(r=>{
          console.log('r=',r)
          if(r.data==1)
            {
              fetchquiz(); 
                        }
            else{
              navigate('/')
            }
          });
         const fetchquiz=async()=>{  try {
            const quiz=await axios.get("http://localhost:7777/getquiz")
            setQ(quiz.data)
            console.log(q.length)
       } catch (error) {
         console.log(error);
      }}
       
       },[])
  return (
    <>
     <Stunav/>
    <div className='py-24'>
        <div className='flex justify-center'>
        {
                        
                        q.map((q,i)=>(<>
                        <div className='flex mx-12 justify-center'>
                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEXvEvSV2IeEPeY3ukHTw489tCUv14dwgXJsoEm7yUQ&s" alt="" /> */}
                        <div className='bg-slate-500 my-10 w-40 h-48 mx-5 rounded-md'>
                            
                        <img className='h-24  mx-7 my-4 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEXvEvSV2IeEPeY3ukHTw489tCUv14dwgXJsoEm7yUQ&s" alt="" />
                            <button onClick={(e)=>{localStorage.setItem("quizid",q._id);navigate('/attendquiz')}}className='bg-black rounded-lg text-white mx-5 hover:bg-slate-400'>ATTTEND QUIZ{i}</button>
                            
                            </div>
                           
                        </div>
                        </>))
}
</div>
    </div>
    </>
       
  )
}
