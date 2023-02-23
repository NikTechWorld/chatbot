import SocketProvider, { useSocket } from "./context/SocketContext";
import ChatBoxUI from "./components/ChatBoxUI";
import Chat from "./components/chat/Chat";

function App() {
  const socket = useSocket();
  return (
    <SocketProvider>
      {/* <ChatBoxUI /> */}
      <Chat />
    </SocketProvider>
  );
}

export default App;
