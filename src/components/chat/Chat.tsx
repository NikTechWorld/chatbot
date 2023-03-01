import { useState } from "react";
import UserConversation from "./conversation/UserConversation";
import SideBar from "./userlist/SideBar";
import Login from "../landing/Login";

export interface IAppProps { }

export default function Chat(props: IAppProps) {

  const [accessToken] = useState(localStorage.getItem("accessToken"));
  return (
    <main>
      <div className="container">
        {accessToken ? (
          <div className="row gx-0">
            <SideBar />
            <UserConversation />
          </div>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </main>
  );
}
