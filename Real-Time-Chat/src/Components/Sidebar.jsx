import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chatbar from './Chatbar';

export default function Sidebar() {
  return (
    <div className='w-full md:w-1/4 bg-red-200 border-r-2 border-gray-400'>
      <Navbar />
      {/* Add responsive classes to hide/show elements */}
      <div className='md:block hidden'>
        <Search />
        <Chatbar />
      </div>
    </div>
  )
}
