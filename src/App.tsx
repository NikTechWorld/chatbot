import SocketProvider from "./context/SocketContext";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  );
}

export default App;
