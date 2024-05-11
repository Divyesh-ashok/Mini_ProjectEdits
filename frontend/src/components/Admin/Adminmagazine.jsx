import React, { useEffect } from 'react'
import Apppbar from '../../parts/Appbar'
import { useState } from 'react'
import axios from 'axios'
import Button from '../../parts/Button'
export default function Adminmagazine() {
    const [image,setImage]=useState(null)
    useEffect(()=>{getPdf()},[]);
    const getPdf=async()=>{
        const result=await axios.get("http://localhost:7777/magazine")
        console.log(result.data)
        setImage(result.data)
    }
    const showpdf=(pdf)=>{
        window.open(`http://localhost:7777/files/${pdf}`,"_blank","noreferrer")
    }
  return (
    <>
    <Apppbar/>
        <div className="flex py-48 mx-32 flex-wrap">
          {image==null?"":image.map(data=>{
            return(
                <>
               
                <div className='bg-slate-400 w-96 h-54 rounded-md mx-4 my-4'>
                <img className="size-24 mx-36 bg-white my-2"src="https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png" alt="" />
                <div className="text-2xl px-32 font-bold">Title:{data.title}</div>
                <div className="text-2xl px-32 py-2 font-bold">By:{data.creator}</div>

                <div className="px-3 py-4">
                <Button onClick={(e)=>{showpdf(data.filename)}} label={"show"}/>
                </div>
            </div>
            </>
            )
          })}
            
        </div>
    </>
  )
}
