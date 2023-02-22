import io, { Socket } from "socket.io-client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SOCKET_URL } from "../config/default.config";
import EVENTS from "../config/events";
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
  transports: ["websocket"],
};
const socket = io("http://localhost", connectionOptions);
socket.on("error", (error) => {
  console.log(error);
});
interface Context {
  socket: Socket;
  userName?: string;
  setUserName: Function;
  messages: { message: string; userName: string; time: string }[];
  setMessages: Function;
  roomId?: string;
  rooms: Record<string, { name: string }>;
}
const SocketContext = createContext<Context>({
  socket,
  setUserName: () => false,
  setMessages: () => false,
  rooms: {},
  messages: [],
});

function SocketProvider(props: any) {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomID] = useState("");
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState<
    { message: string; userName: string; time: string }[]
  >([]);
  socket.on(EVENTS.SERVER.ROOMS, (value) => setRooms(value));
  socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
    setRoomID(value);
    setMessages([]);
  });
  socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, userName, time }) => {
    setMessages([...messages, { message, userName, time }]);
  });
  return (
    <SocketContext.Provider
      value={{
        socket,
        userName,
        setUserName,
        rooms,
        roomId,
        setMessages,
        messages,
      }}
      {...props}
    />
  );
}
export const useSocket = () => useContext(SocketContext);
export default SocketProvider;
