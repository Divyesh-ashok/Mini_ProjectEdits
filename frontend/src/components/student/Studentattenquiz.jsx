import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Button from '../../parts/Button'
import { useNavigate } from 'react-router-dom'

export default function Studentattenquiz() {
  const id=localStorage.getItem('quizid')
  const navigate=useNavigate()
   const [score,setScore]=useState(0)
   const [answer,setAnswer]=useState('a')
    const [q,setQ]=useState([])
    const [attend,setAttend]=useState([])
    const [userAnswer, setUserAnswer] = useState('');
    // State to store whether the answer is correct or not
    const [isCorrect, setIsCorrect] = useState(null);
    // The correct answer for the quiz
    const [correctAnswer, setCorrectAnswer] = useState('')
     function endquiz(){
          navigate('/stuhome')
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    };
    
    useEffect(() =>{
      axios.get("http://localhost:7777/studentverify").then(r=>{
        console.log('r=',r)
        if(r.data==1)
          {
                  const fetchquiz=async()=>{  try {
                  const quiz=await axios.post("http://localhost:7777/getquiz",{id:id})
                    setQ(quiz.data)
                    //console.log(q)
                    setAttend(q[0].quizes)
                    //console.log(attend)
              } catch (error) {
                console.log(error);
              }}
              fetchquiz();
          }
          else{
            navigate('/')
          }
        });
       },[q,attend])
   
  return (
   <>
      <div className='bg-black shadow-lg fixed w-full'>
   <div className='flex justify-between py-4'>
    <div className='text-white pl-4 font-semibold text-3xl'>ATTEND QUIZ</div>
    <div></div>
   
   </div>
   </div>
   <div className='py-28'>
    {
          attend.map((qz,i)=>(<>
            <div className=''>
            {
              
                qz.quiz.map((a,j)=>(<>
                 <div className='bg-slate-400 my-14 mx-5 rounded-md'>
                  <div className='mx-2 my-2'>
                <h1 className='text-1xl font-bold'>Question</h1>
                <h1 className='font-semibold'>{a.q}</h1>
                {/* // <h1 className='font-semibold'>a:{a.o1}</h1>
                // <h1 className='font-semibold'>b:{a.o2}</h1>
                // <h1 className='font-semibold'>c:{a.o3}</h1>
                // <h1 className='font-semibold'>d:{a.o4}</h1>
                // <div className='font-semibold'> answer </div>
                //   <input type="text" onChange={(e)=>setAnswer(a.ans)}/>
                // <div className='flex justify-end'>
                // <button className='bg-black hover:bg-slate-500 text-white my-2 px-2 rounded-sm'>Submit answer</button>
                // </div> */}
                 </div>
                
                <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="answer"
            value="option1"
            onChange={(e) => {setUserAnswer(e.target.value)}}
          />
          {a.o1}
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="answer"
            value="option2"
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          {a.o2}
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="answer"
            value="option3"
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          {a.o3}
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="answer"
            value="option4"
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          {a.o4}
        </label>
      </div>
      <div className='flex justify-end'>
      <button  className='bg-black hover:bg-slate-500 text-white my-2 px-2 rounded-md me-2' >Submit</button>
      </div>
      
    </form>
    </div> 
                </>))
            }

            </div>
            </>))


    }

    <Button onClick={endquiz} label={"Endquiz"}/>

   </div>
   
   </>
  )
}