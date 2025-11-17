import axios from 'axios'
import React, { useState } from 'react'
import { Button } from '../components/ui/button'

function Create() {
    const[task , setTask]=useState("")
    const handleadd=async ()=>{
        try {
          await axios.post("http://localhost:3000/api/create", {task})
          setTask("") 
          
        } catch (error) {
          console.log(error)  
        }
    }
  return (
    <div>

    <div className='flex items-center justify-center mt-30 '>
      <h1 className='text-bold text-3px'>TODOAPP- MERN</h1> 
     

      </div>
      <div className='flex items-center justify-center mt-5'>

      <input
      type='text' placeholder='enter your text' className='rounder border-3 bg-white-2000 m-4 h-12 w-87'
      value={task} onChange={(e)=>setTask(e.target.value)}
      />
      <Button onClick={handleadd} className="bg-green-600">add task</Button>
      </div>
    
    </div>
  )
}

export default Create
