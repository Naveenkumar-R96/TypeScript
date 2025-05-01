import React, { use } from 'react'
import UserInput from './components/UserInput'
import Tasks from './components/Tasks'
import { useState } from 'react'
const App = () => {

  const [tasks,setTasks]=useState([]);

  return (
    <div className='h-screen bg-gray-200'>
      <UserInput setTasks={setTasks} tasks={tasks}/>
      <Tasks/>
    </div>
  )
}

export default App
