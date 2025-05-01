import React, { useState } from 'react'

const Search = ({data,setData,toggle,setToggle}) => {
    const handleSearch = (e) => {
        e.preventDefault()
        const searchTerm = e.target.value.toLowerCase()
        const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm))
        setData(filteredData)

        
    }

    const handleToggle=(e)=>{
        e.preventDefault()
        setToggle(!toggle)  
    }
   
return (
    <div className=' relative'>
        <form action="" className='flex justify-between items-center gap-6 p-5'>
            <div></div>
            <input 
                type="text" 
                placeholder='Search Items' 
                className='w-[130px] sm:w-[400px] bg-white p-2 text-16px sm:text-xl text-gray-500 rounded text-center outline-none'
                onChange={handleSearch} 
            />
            <button 
                type="button" 
                className='bg-white px-4 py-2 rounded text-gray-600'
                onClick={(e) => e.preventDefault()}
            >
                Search
            </button>
            <button className='bg-green-300 px-4 py-2' onClick={(e)=>handleToggle(e)}>Cart</button>
        </form>

       
    </div>
)
}

export default Search
