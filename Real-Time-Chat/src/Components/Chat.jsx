// import React from 'react'
// import Navbar from './Navbar'
// import { FaVideo } from "react-icons/fa6";
// import { IoMdPersonAdd } from "react-icons/io";
// import { IoMdMore } from "react-icons/io";
// import Messages from './Messages';
// import Input from './Input';

// export default function Chat() {
//   return (
//     <div className='flex-1 bg-red-100'>
//       <div className='bg-red-400 flex items-center h-12 justify-between'>
//         <span>Nk</span>
//         <div className='flex gap-3 p-2.5'>
//           <FaVideo />
//           <IoMdPersonAdd />
//           <IoMdMore />
//         </div>
     
//       </div>
//       <Messages/>
//      <Input/>
//     </div>
//   )
// }


////ANTHORE METHOD
import React from 'react';
import { FaVideo } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import Input from './Input';

export default function Chat() {
  return (
    <div className='flex flex-col h-full'>
      <div className='bg-red-400 flex items-center h-12 justify-between'>
        <span>Nk</span>
        <div className='flex gap-3 p-2.5'>
          <FaVideo />
          <IoMdPersonAdd />
          <IoMdMore />
        </div>
      </div>
      <div className="bg-gray-200 flex-1 overflow-y-auto">
        <div className="px-6 py-2">
          <div className="flex items-center mb-2 gap-1">
            <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User Avatar"/>
            <div className="font-medium">John Doe</div>
          </div>
          <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
            Hi, how can I help you?
          </div>
          <div className="flex items-center justify-end mb-4">
            <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
              Sure, I can help with that.
            </div>
            <img className="w-8 h-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar"/>
          </div>
          
          {/* Add more messages with margin bottom */}
          <div className="flex items-center justify-end mb-4">
            <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
              Another message here.
            </div>
            <img className="w-8 h-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar"/>
          </div>

          <div className="flex items-center justify-end mb-4">
            <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
              Another message here.
            </div>
            <img className="w-8 h-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar"/>
          </div>
        </div>
      </div>
      <div className="bg-white p-4">
        <Input/>
      </div>
    </div>
  );
}
