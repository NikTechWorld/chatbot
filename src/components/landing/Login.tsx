import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import asyncApiCall from "../../config/api";
import * as userActions from "./../../actions/userActions";

function Login(props: any) {
  // useEffect(() => {
  //   let accessToken = sessionStorage.getItem("accessToken");
  //   if (accessToken === null || accessToken === undefined) {
  //     let code = new URLSearchParams(window.location.search).get("code");
  //     console.log(code);
  //     if (code) {
  //       (async () => {
  //         let responce = await asyncApiCall("oAuth2/token/github", "GET", {
  //           code,
  //         });
  //         if (responce && responce.token) {
  //           await props.userActions.createUser(responce.userDetails);
  //           await sessionStorage.setItem("accessToken", responce.token);
  //           await localStorage.setItem("accessToken", responce.token);
  //           window.location.replace(process.env.REACT_APP_HOMEPAGE || "/");
  //         }
  //       })();
  //     }
  //   }
  // }, []);
  const handelGitHubLogin = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
  };
  return (
    <div className="card card-body p-4 p-sm-5 mt-sm-n5 mb-n5">
      <span
        className="fa-brands fa-github fs-10"
        style={{
          border: "1px solid",
          fontSize: 100,
          width: "fit-content",
          padding: 10,
          borderRadius: 10,
          cursor: "pointer",
        }}
        onClick={handelGitHubLogin}
      />
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
