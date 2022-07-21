import React from 'react'
import {useState} from 'react';

export default function Todo({todo}) {

  const [color,setColor]=useState('none')

function clicked()
{
  if(color==='none')
  {
  setColor("green")
  }
  else{
    setColor('none')
  }
}

  return (
    <div className="max-w-6xl mx-auto flex justify-between px-8 py-4 bg-blue-100 shadow-xl mt-6 rounded-lg border-2 border-black-400">
    <div>
      <h2 className="text-2xl font-bold">Title:  {todo.title}</h2>
      <p><b>Description:</b> {todo.description}</p>
      <div className="flex space-x-6 mt-3">
        <button  onClick={()=>clicked()
        }>
          <svg
          
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill={color}
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div className='bg-red-200 px-4 py-2 mr-8 w-64'>
      <h3><b>Category:</b> {todo.category}</h3>
      <h4 className="flex">
          <b>Done:</b>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </h4>
      <h4><b>DateTime: </b>{todo.date}</h4>
    </div>
  </div>
  )
}