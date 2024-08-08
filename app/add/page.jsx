import React from 'react'

function Add() {
  return (
    <form className='flex flex-col gap-4'>
        <input 
            className='border border-pink-200 py-4 px-8 rounded-xl' 
            type="text" 
            placeholder="Title"
        />

        <input 
            className='border border-pink-200 py-4 px-8 rounded-xl' 
            type="text" 
            placeholder="Description"
        />
        <button className='bg-violet-600 font-bold text-white rounded-xl p-4 hover:bg-pink-500'>
            Add item
        </button>

    </form>
  )
}

export default Add