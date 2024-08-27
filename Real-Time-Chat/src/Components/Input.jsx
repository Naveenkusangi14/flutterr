import React from 'react';
import { LuImagePlus } from "react-icons/lu";
import { IoMdAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function Input() {
  return (
    <div className='bg-white h-10 p-2.5 flex items-center justify-between'>
      <input className='w-full border-none outline-none font-mediu' type="text" placeholder='Type Something....' />
      <div className='flex items-center gap-2.5'>
        <LuImagePlus />
        <input style={{ display: 'none' }} type="file" />
        <label htmlFor="file">
          <IoMdAttach />
        </label>
        <IoSend className='' />
      </div>
    </div>
  );
}