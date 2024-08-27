import React from 'react';

export default function Navbar() {
  return (
    <div className='bg-red-400 max-w-full flex items-center min-h-12 p-2 justify-between'>
      <h1 className='font-bold uppercase text-black'>Devigo</h1>
      <div className='flex items-center gap-2'>
        <img
          className='w-6 h-6 rounded-full object-cover'
          src='https://images.pexels.com/photos/11202343/pexels-photo-11202343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <span className='font-bold text-black'>Naveen</span>
        <button className='border px-1 py-0.5 cursor-pointer bg-blue-500 text-white text-xs text-center font-bold border-none rounded-md'>
          Logout
        </button>
      </div>
    </div>
  );
}
