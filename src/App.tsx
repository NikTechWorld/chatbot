import React from 'react';
import './App.css'; 
import SocketProvider, { useSocket } from './context/SocketContext';
import ChatBoxUI from './component/ChatBoxUI';

function App() { 
  const socket=useSocket(); 
  return (
    <SocketProvider>
      <ChatBoxUI/>
    </SocketProvider>
  );
}

export default App;
