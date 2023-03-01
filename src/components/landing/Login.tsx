import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./../../actions/userActions"

function Login(props: any) {
    useEffect(() => {
        let accessToken = localStorage.getItem("accessToken");
        if (accessToken === null || accessToken === undefined) {
            let code = new URLSearchParams(window.location.search).get("code")
            if (code) {
                (async () => {
                    let responce = await fetch(`http://localhost/oauth2/token/github?code=${code}`).then((res) => {
                        if (res.status === 401) {
                            localStorage.clear();
                        } else return res.json();
                    }).catch(error => console.log(error))
                    if (responce && responce.token) {
                        props.userActions.createUser(responce.userDetails)
                        localStorage.setItem('accessToken', responce.token)
                    }
                })()


            }
            ///oauth2/token/github
        }
    }, [])
    const handelGitHubLogin = () => {
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    }
    return <div className="card card-body p-4 p-sm-5 mt-sm-n5 mb-n5">
        <span className="fa-brands fa-github fs-10" style={{
            border: "1px solid",
            fontSize: 100,
            width: "fit-content",
            padding: 10,
            borderRadius: 10,
            cursor: "pointer"
        }}
            onClick={handelGitHubLogin} />
    </div>
}

function mapStateToProps(state: any) {
    return { state };
}
function mapDispatchToProps(dispatch: any) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)