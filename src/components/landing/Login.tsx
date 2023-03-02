import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./../../actions/userActions";

function Login(props: any) {
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
