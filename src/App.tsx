
import SocketProvider, { useSocket } from './context/SocketContext';
import ChatBoxUI from './components/ChatBoxUI';

function App() { 
  const socket=useSocket(); 
  return (
    <SocketProvider>
      <ChatBoxUI/>
    </SocketProvider>
  );
}

export default App;
