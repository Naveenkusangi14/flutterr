// Chatbar.jsx
import { IoMdMore } from "react-icons/io";

export default function Chatbar() {
  return (
    <div>
      <div className='flex  items-center p-2 cursor-pointer'>
        <img className='w-12 h-12 rounded-full object-cover' src="https://images.pexels.com/photos/1248474/pexels-photo-1248474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='ml-2'>
          <span>Nk</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='flex items-center p-2 cursor-pointer'>
        <img className='w-12 h-12 rounded-full object-cover' src="https://images.pexels.com/photos/1248474/pexels-photo-1248474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='ml-2'>
          <span>Nk</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}