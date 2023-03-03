import io, { Socket } from "socket.io-client";
import React, { createContext, useContext, useEffect, useRef } from "react";
var connectionOptions = {
  "force new connection": true,
  timeout: 10000,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 3,
  transports: ["websocket"],
};
const socket = io(process.env.REACT_APP_BACKEND_URL || "", connectionOptions);
interface Context {
  socket: any;
}
const SocketContext = createContext<Context>({
  socket,
});
function SocketProvider(props: any) {
  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
      {...props}
    />
  );
}
export const useSocket = () => useContext(SocketContext);
export default SocketProvider;
