import React from 'react';
import Message from './Message';

export default function Messages() {
  return (
    <div className='bg-green-600 p-2.5 h-[calc(100%-90px)] overflow-y-auto'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
