import * as React from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router';
import { bindActionCreators } from 'redux';
import * as userActions from "../actions/userActions";
import SocketProvider from '../context/SocketContext';

function PrivateRoute(props: any) {
    React.useEffect(() => {
        let { loginUser } = props.state.user;
        if (!loginUser)
            props.userActions.setActiveUser();
        console.log("upadated!")
    })
    return <SocketProvider> <Outlet /></SocketProvider>;
}
function mapStateToProps(state: any) {
    return { state };
}
function mapDispatchToProps(dispatch: any) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
