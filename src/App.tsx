import SocketProvider from "./context/SocketContext";
import Chat from "./components/chat/Chat";
import { useEffect } from "react";
import { getAccessToken } from "./config/helper";

function App() {
  useEffect(() => {
    const token = getAccessToken();
    const sessionToken = sessionStorage.getItem("accessToken") || "";
    if (!sessionToken.trim() && token.trim()) {
      sessionStorage.setItem("accessToken", token);
      window.location.replace(process.env.REACT_APP_HOMEPAGE || "/");
    } 
  }, [])
  

  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  );
}

export default App;
