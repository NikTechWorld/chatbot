import * as React from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import asyncApiCall from "../config/api";
import { useSocket } from "../context/SocketContext";
import * as userActions from "./../actions/userActions";
function OAuth(props: any) {
  const [searchParams] = useSearchParams();
  let { socket } = useSocket();
  React.useEffect(() => {
    const code = searchParams.get("code");
    getToken(code, socket);
  }, []);
  const getToken = async (code: any, socket: any) => {
    localStorage.clear();
    if (code) {
      let responce = await asyncApiCall("oAuth2/token/github", "GET", {
        code,
      });
      if (responce && responce.token) {
        await props.userActions.createUser(responce.userDetails);
        await localStorage.setItem("accessToken", responce.token);
      }
    }
  };
  return <div>Loading...</div>;
}

function mapStateToProps(state: any) {
  return { state };
}
function mapDispatchToProps(dispatch: any) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(OAuth);
