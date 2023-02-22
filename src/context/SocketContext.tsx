import io, { Socket } from "socket.io-client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { SOCKET_URL } from "../config/default.config";
// var loc = window.location, new_uri;
// if (loc.protocol === "https:") {
//   new_uri = "wss:";
// } else {
//   new_uri = "ws:";
// }
// new_uri += "//192.168.0.133" ;
// new_uri += loc.pathname + "/to/ws";
// console.log(new_uri)
var connectionOptions = {
  "force new connection": true,
  timeout: 10000,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 3,
  transports: ['websocket']
};
const socket = io("http://localhost", connectionOptions);
socket.on("error", (error) => {
  console.log(error)
});
interface Context {
  socket: Socket,
  userName?: String,
  setUserName: Function
}
const SocketContext = createContext<Context>({ socket, setUserName: () => false, });

function SocketProvider(props: any) {
  const [userName, setUserName] = useState("");
  return <SocketContext.Provider value={{ socket, userName, setUserName }} {...props} />;
}
export const useSocket = () => useContext(SocketContext);
export default SocketProvider;