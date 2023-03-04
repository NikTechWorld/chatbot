import { useEffect, useState } from "react";
import UserConversation from "./conversation/UserConversation";
import SideBar from "./userlist/SideBar";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import * as chatAction from "../../components/chat/chatAction";
import { connect } from "react-redux";
import { useSocket } from "../../context/SocketContext";
import EVENTS from "../../config/events";

function Chat(props: any) {
  const { socket, user } = useSocket();
  let {onlieUsers}=props.state.user;
  useEffect(() => {
    socket.on(EVENTS.USER.GET, (users: any) => {
      if (users.length > 1) {
        let filterdUsers = users.filter((u: any) => u.userId !== user?.id)
        if (filterdUsers && filterdUsers.length) {
          props.userActions.setOnlineUser(filterdUsers)  
        }

      }
    });
  }, [])
  useEffect(()=>{
    let {activeChat}=props.state.chat;
    if(!activeChat.length && onlieUsers.length)
    props.chatAction.setActiveChat(onlieUsers[0]) 
  },[onlieUsers])
  
  return (
    <main>
      <div className="container">
        <div className="row gx-0">
          <SideBar onlineUserCount={onlieUsers.length}/>
          <UserConversation />
        </div>
      </div>
    </main>
  );
}
function mapStateToProps(state: any) {
  return { state };
}
function mapDispatchToProps(dispatch: any) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    chatAction: bindActionCreators(chatAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
