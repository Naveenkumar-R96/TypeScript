import React from 'react'
import { useEffect, useState } from 'react'
import UserInput from './UserInput'
import Tasks from './Tasks'
const Main = () => {
    const [tasks,setTasks]=useState([]);
  const [editTask,setEditTask]=useState(null);

  const handleEdit=(task)=>{
    setEditTask(task);
  }

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem('tasks'));
    if(stored && stored.length>0){
      setTasks(stored);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  return (
    <div className='h-screen bg-gray-200'>
      <UserInput setTasks={setTasks} tasks={tasks} editTask={editTask} setEditTask={setEditTask}/>
      <Tasks tasks={tasks} settasks={setTasks} handleEdit={handleEdit}/>
    </div>
  )
}

export default Main
