import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const[task, setTask]=useState("")
    const Api_url=import.meta.env.VITE_API_URL
    const handleadd= async ()=>{
        try {
          await axios.post(`${Api_url}/api/create`, {task})  
          setTask("")
           setTodos((prev) => [...prev, res.data.todo]);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div  className='items-center justify-center mt-30 ml-150'>
      
      <h1 className='text-bold'>TODO-APP USING MERN STACK </h1>
     <div >
        <input
        type='text' placeholder='enter your text'
        value={task} onChange={(e)=>setTask(e.target.value)}
        className='border -2 pink'
        />
        <Button onClick={handleadd} className="bg-green-600 mt-5">add task</Button>
      </div>
    </div>
    
  )
}

export default Create
