import React, { useState } from 'react'

const Tasks = () => {
   
  return (
    <div className='mb-5 flex justify-center items-center gap-4'>
      <div className='card bg-white w-[130px] sm:w-[300px] h-[100px] sm:h-[200px] flex flex-col gap-y-7 p-7 rounded-2xl'>
            <h1 className='text-xl sm:text-3xl '>To complete this project</h1>
            <div className='flex justify-between items-center'>
                <button className='bg-red-500 p-2 rounded text-white'>Delete</button>
                <button className='bg-yellow-400 p-2 rounded '>Incomplete</button>
            </div>

      </div>
    </div>
  )
}

export default Tasks
