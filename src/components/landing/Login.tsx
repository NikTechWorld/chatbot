import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as helper from "./../../config/helper";
import * as userActions from "./../../actions/userActions";

function Login(props: any) {
  const handelGitHubLogin = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
  };
  useEffect(()=>{
    // if(!helper.haveAuthorizeToken())
    // localStorage.clear() 
  },[])
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-sm-10 col-md-8 col-lg-6 position-relative z-index-1">
        <span
          className="fa-brands fa-github fs-10 "
          style={{
            border: "1px solid",
            fontSize: 100,
            width: "fit-content",
            padding: 10,
            borderRadius: 10,
            cursor: "pointer",
            marginTop:"100px"
          }}
          onClick={handelGitHubLogin}
        /></div>
      </div>
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
