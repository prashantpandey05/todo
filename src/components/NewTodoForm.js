import React from 'react'

import { Dialog } from '@headlessui/react'

export default function NewTodoForm({isOpen,setIsOpen}) {

   


  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-8">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          <Dialog.Title className="font-bold text-xl mt-4 ml-8">Create New Todo</Dialog.Title>

          <div className="h-96 w-80">
            <form className='flex flex-col px-8 pb-8 ronded-lg'> 
            
                <input type="text" placeholder='Add Todo Title' className='border border-2 mt-8 rounded'/>
                <textarea placeholder='Add Todo Description' className='border border-2 mt-4 rounded' rows="6" cols="4"/>
                <select className='mt-4 border rounded' >

                <option>Work</option>
                <option>Personal</option>
                <option>Other</option>

                </select>
                <button className='bg-green-300 rounded-lg shadow mt-8'>Add New Todo</button>
                

            </form>
          </div>


        </Dialog.Panel>
      </div>
    </Dialog>
)
  
}