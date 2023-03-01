import EVENTS from "../../config/events";
import { useEffect, useState } from "react";
import { useSocket } from "../../context/SocketContext";
import UserConversation from "./conversation/UserConversation";
import SideBar from "./userlist/SideBar";

export interface IAppProps {}

export default function Chat(props: IAppProps) {
  const {
    userName,
    setUserName,
    socket,
    rooms,
    messages,
    roomId,
    setMessages,
  } = useSocket();
  const isLogedIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!String(user).trim()) return;
    setUserName(user);
    localStorage.setItem("user", JSON.stringify({ user }));

    socket.emit(EVENTS.USER.CREATE, user);
    socket.on(EVENTS.USER.GET, (user) => console.log(user));
  };
  const [user, setUser] = useState("");
  return (
    <main>
      <div className="container">
      <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_REDIRECT_URL}?path=${"/"}&scope=user:email`}
        >
          LOGIN WITH GITHUB
        </a>
        {userName ? (
          <div className="row gx-0">
            <SideBar />
            <UserConversation />
          </div>
        ) : (
          <>
            <input
              placeholder="User Name"
              onChange={(e) => setUser(e.target.value)}
            />
            <button className="btn" onClick={(e) => isLogedIn(e)}>
              Go
            </button>
          </>
        )}
      </div>
    </main>
  );
}
