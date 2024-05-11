import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Intermmediate() {
    const navigate=useNavigate()
  return (
    <>
    <div className='h-max bg-slate-200'>
    <div className='bg- h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-96 p-2 h-48 px-4 shadow-2xl">
                <div className='pt-5'>
    <button onClick={(e)=>{navigate('/teacher/signup')}}type="button" class="text-white h-32 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Teacher</button>
    <button onClick={(e)=>{navigate('/student/signup')}} type="button" class="text-white h-32 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Student</button>
    <button onClick={(e)=>{navigate('/alumini/signup')}} type="button" class="text-white h-32 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Alumni</button>
    </div></div>
            </div>
        </div>
    </div>
    
    </>
  )
}
