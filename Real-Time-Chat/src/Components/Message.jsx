import React from 'react';

export default function Message() {
  return (
    <div className='flex gap-3 mb-4 flex-row-reverse'>
      <div>
        <img className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/1248474/pexels-photo-1248474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span className='flex flex-col text-gray-800 font-light'>Just Now</span>
      </div>
      <div className='max-w-[80%] flex flex-col gap-2 items-end'>
        <p className='bg-white p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg'>Hello</p>
        <div className='h-24 overflow-y-auto'>
          <img className='w-24 h-24' src="https://images.pexels.com/photos/1248474/pexels-photo-1248474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  )
}
