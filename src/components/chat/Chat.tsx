import { useEffect, useState } from "react";
import UserConversation from "./conversation/UserConversation";
import SideBar from "./userlist/SideBar";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketContext";
import EVENTS from "../../config/events";

// export interface IAppProps { }

function Chat(props: any) {
  const [accessToken] = useState(localStorage.getItem("accessToken"));
  const { socket } = useSocket();
  let navigate = useNavigate();
  useEffect(() => {
    // props.userActions.createUser(null);
    props.userActions.getActiveUser();
    if (accessToken === null) navigate("/login");
    else {
      let { onlieUsers, loginUser } = props.state.user;
      const isPresent = onlieUsers.some((u: any) => u === loginUser?.id);
      if (!isPresent && loginUser) {
        socket.emit(EVENTS.USER.CREATE, loginUser.id);
      }
    }
  }, []);
  let sender = props.state.user.loginUser;
  let reciver = props.state.user.onlieUsers.filter(
    (u: any) => u.id !== sender.id
  )[0];
  if (reciver === undefined)
    socket.on(EVENTS.USER.GET, (users: any) => {
      props.userActions.getOnlineUser(users);
    });
  return (
    <main>
      <div className="container">
        <div className="row gx-0">
          <SideBar />
          <UserConversation sender={sender} reciver={reciver} />
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
