import React from 'react'
import Apppbar from '../../parts/Appbar'
import Tenav from './Tenav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';

export default function Teachershome() {
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
  return (
    <>
    <>
    <Tenav/>
    <div className=' flex justify-end bg-black w-full'>
        <div className=' text-left text-white text-7xl my-40 font-extrabold w-96'>DEPT OF COMPUTER SCIENCE</div>
        <img src="../../public/dept.webp" alt="hi"/>
      </div>
      <div className='p-10 m-6 border-solid border-2 border-black rounded-3xl hover:bg-black hover:text-white hover:ease-in-out duration-300'>
        <div className=' text-left text-6xl font-semibold'>OUR VISION</div>
        <div className='my-4 mx-8 text-2xl'>To be a centre of excellence for nurturing the young minds to become innovative computing
          professionals for the empowerment of society.
        </div>
      </div>
      <div className='p-10 m-6 border-solid border-2 border-black rounded-3xl hover:bg-black hover:text-white hover:ease-in-out duration-300'>
        <div className=' text-left text-6xl font-semibold'>OUR MISSION</div>
        <div className='my-4 mx-8 text-2xl'>• To offer a solid foundation in computing and technology for crafting competent
professionals.
</div>
<div className='my-4 mx-8 text-2xl'>
• To promote innovative and entrepreneurial skills of students by exposing them to the
forefront of developments in the field of computing.
</div>
<div className='my-4 mx-8 text-2xl'>
• To inculcate strong ethical values in the young minds to work with commitment for the
progress of the nation.
        </div>
      </div>
    </>
    </>
  )
}
