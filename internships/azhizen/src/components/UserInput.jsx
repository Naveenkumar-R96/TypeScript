import React, { useEffect } from "react";
import { useState } from "react";
const UserInput = ({ setTasks, tasks ,editTask,setEditTask}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    if(editTask){
        const updated=tasks.map((task)=>task.id===editTask.id?{...task,task:input}:task);
        setTasks(updated);
        setEditTask(null);
        setInput("");
        return;
    }
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), task: input }]);
    console.log(tasks);
    setInput("");
  };
  useEffect(() => {
    if(editTask){
        setInput(editTask.task);
    }
  },[editTask]);
  return (
    <div className="p-4 align-middle flex justify-center gap-4 items-center">
      <input
        type="text"
        placeholder="Enter the Task"
        className="bg-gray-100 w-[200px] sm:w-[400px] p-4 rounded-3xl border-none outline-none "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-gray-100  rounded-3xl p-4 text-gray-500 cursor-pointer"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </div>
  );
};

export default UserInput;
