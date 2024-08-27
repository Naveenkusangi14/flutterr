import React from 'react';
import Sidebar from '../Components/Sidebar';
import Chat from '../Components/Chat';

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center"
     style={{backgroundImage: "url('https://media.istockphoto.com/id/1250474132/photo/hand-touching-virtual-world-with-connection-network-global-data-information-and-technology.jpg?s=2048x2048&w=is&k=20&c=JOtEPdp0feKS_1vmrmWWiQm5O3IWzA-qeZm85ZWToBw=')"}}>
      <div className="border border-gray-800 w-full max-w-screen-lg h-4/5 flex rounded overflow-hidden shadow-lg bg-white bg-opacity-75">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

