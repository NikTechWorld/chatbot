import { useState, useEffect } from "react";
import EVENTS from "../config/events";
import { useSocket } from "../context/SocketContext";

export default function ChatBoxUI() {
  const {
    userName,
    setUserName,
    socket,
    rooms,
    messages,
    roomId,
    setMessages,
  } = useSocket();
  const [user, setUser] = useState<string>("");
  const [localRoom, setLocalRoom] = useState<string>("");
  const [localMessage, setLocalMessage] = useState<string>("");
  const isLogedIn = () => {
    if (!String(user).trim()) return;
    setUserName(user);
    sessionStorage.setItem("user", JSON.stringify({ user }));
  };
  const handeCreateRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!String(localRoom).trim()) return;
    const roomName = localRoom;
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });
    setLocalRoom("");
  };
  const handelSendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!String(localMessage).trim()) return;
    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, {
      roomId,
      message: localMessage,
      userName: user,
    });
    const date = new Date();
    setMessages([
      ...messages,
      {
        userName: "You",
        message: localMessage,
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      },
    ]);
  };
  const handelJoinRoom = (
    e: React.MouseEvent<HTMLButtonElement>,
    key: string
  ) => {
    e.preventDefault();
    if (key === roomId) return;
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  };
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user") || "").user;
    setUserName(user);
  }, []);
  return (
    <div className="container">
      {userName ? (
        <>
          Welcome {userName} &nbsp;
          <input
            name="roomName"
            value={localRoom}
            onChange={(e) => {
              e.preventDefault();
              setLocalRoom(e.currentTarget.value);
            }}
          />
          <button onClick={(e) => handeCreateRoom(e)}>Create Room</button>
          <ul>
            {Object.keys(rooms).map((key) => (
              <li key={key} style={{ padding: "5px 0" }}>
                {rooms[key].name} &nbsp;
                <button
                  title={
                    key === roomId
                      ? `Active Room ${rooms[key].name}`
                      : `click to join ${rooms[key].name}`
                  }
                  onClick={(e) => handelJoinRoom(e, key)}
                  disabled={key === roomId}
                >
                  Join Room
                </button>
              </li>
            ))}
          </ul>
          {!messages ? (
            <div />
          ) : (
            <div>
              {messages.map((message, index) => (
                <pre key={index}>{JSON.stringify(message.message)}</pre>
              ))}
              <textarea
                rows={1}
                placeholder="your message"
                onChange={(e) => {
                  e.preventDefault();
                  setLocalMessage(e.target.value);
                }}
              />
              <button onClick={(e) => handelSendMessage(e)}>Send</button>
            </div>
          )}
        </>
      ) : (
        <>
          <input
            type={"text"}
            placeholder="userName"
            onChange={(e) => setUser(e.currentTarget.value)}
          />
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              isLogedIn();
            }}
          >
            Lets Go
          </button>
        </>
      )}
    </div>
  );
}
