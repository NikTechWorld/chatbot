import SocketProvider from "./context/SocketContext"; 
import { Outlet } from "react-router";

function App(props:any) {
  // useEffect(() => {
  //   const token = getAccessToken();
  //   const sessionToken = sessionStorage.getItem("accessToken") || "";
  //   if (!sessionToken.trim() && token.trim()) {
  //     sessionStorage.setItem("accessToken", token);
  //     window.location.replace(process.env.REACT_APP_HOMEPAGE || "/");
  //   }
  // }, [])  

  return (
    <SocketProvider> 
       <Outlet/>
    </SocketProvider>
  );
}

export default App;