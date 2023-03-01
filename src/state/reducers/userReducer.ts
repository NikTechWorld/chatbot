const initialState = { users: [] }
interface userReducerInterface {
    users: {
        login: string,
        id: number,
        avatar_url: string,
        type: string,
        site_admin: boolean,
        name: string,
        location: string | null,
        email: string | null,
        bio: string | null
    }[]
};
interface userAction {
    type: string,
    payload?: any
}
const userReducer = (state: userReducerInterface = initialState, action: userAction) => { 
    switch (action.type) {
        case "GET_ONLINE_USERS":
            return state;
        case "SIGNUP":
            let { users } = state;
            let userList = [...users];
            userList.push(action.payload)
            state = { ...state, users: userList } 
            return state;

        case "GET_LOGIN_USER":
            console.log(state)
            return state;
        default:
            return state;
    }
}
export default userReducer;
