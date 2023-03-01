import { useEffect, useState } from "react";
import UserConversation from "./conversation/UserConversation";
import SideBar from "./userlist/SideBar";
import Login from "../landing/Login";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions"
import { connect } from "react-redux";

// export interface IAppProps { }

function Chat(props:any) {

  const [accessToken] = useState(localStorage.getItem("accessToken"));
  useEffect(()=>{
    props.userActions.createUser(null);
    props.userActions.getActiveUser()
  },[])
  console.log(props)
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
function mapStateToProps(state: any) {
  return { state };
}
function mapDispatchToProps(dispatch: any) {
  return {
      userActions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)