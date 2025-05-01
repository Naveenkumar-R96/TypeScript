import React, { useState } from 'react'

const Tasks = ({tasks,settasks,handleEdit}) => {

    const handleDelete=(id)=>{
        const updated=tasks.filter((task)=>task.id!==id);
        settasks(updated);
    }

   
    const [completedTasks, setCompletedTasks] = useState(false);
    
    
;

return (
    <div className='mb-5 flex justify-center items-center gap-4 flex-wrap'>
            {tasks.map((task) => (
                    <div key={task.id} className='card bg-white w-[250px]  sm:w-[300px] h-auto sm:h-auto flex flex-col gap-y-7 p-7 rounded-2xl relative'>
                            <h1 className='text-4 sm:text-3xl '>{task.task}</h1>
                            <div className='flex justify-between items-center'>
                                    <button className='bg-red-500 p-2 rounded text-white' onClick={() => handleDelete(task.id)}>Delete</button>
                                    <button 
                                        className={`p-2 rounded ${completedTasks ? 'bg-green-500 text-white' : 'bg-yellow-400'}`} 
                                        onClick={() => setCompletedTasks(!completedTasks)}
                                    >
                                      {completedTasks ? "completed" :"incomplete"}
                                    </button>
                            </div>
                            <button className='bg-blue-300 px-2 py-2 absolute top-2 right-3 rounded text-white text-[16px] sm:text-xl' onClick={()=>handleEdit(task)}>Edit</button>
                    </div>
            ))}
    </div>
);
}

export default Tasks
