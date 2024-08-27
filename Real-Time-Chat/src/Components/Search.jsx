import React from 'react';

export default function Search() {
  return (
    <div className='border-b border-gray-400'>
      <div className='p-1'>
        <input className='bg-transparent border-none outline-none text-black' type="text" placeholder='Find A User' />
      </div>
    </div>
  );
}