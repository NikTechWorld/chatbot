type userType = {
    login: string,
    id: number,
    avatar_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    location: string | null,
    email: string | null,
    bio: string | null
} | null
const initialState = { onlieUsers: [], loginUser: null }
interface userReducerInterface {
    onlieUsers: userType[]
    loginUser: userType
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
            let { onlieUsers } = state;
            let userList = [...onlieUsers];
            userList.push(action.payload)
            state = { ...state, onlieUsers: userList, loginUser: action.payload }
            return state;

        case "GET_LOGIN_USER": 
            state = { ...state, loginUser: action.payload }
            return state;
        default:
            return state;
    }
}
export default userReducer;
