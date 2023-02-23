import UserConversation from "./conversation/UserConversation";
import SideBar from "./userlist/SideBar";

export interface IAppProps {}

export default function Chat(props: IAppProps) {
  return (
    <main>
      <div className="container">
        <div className="row gx-0">
          <SideBar />
          <UserConversation />
        </div>
      </div>
    </main>
  );
}
