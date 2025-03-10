type userType = {
  login: string;
  id: number;
  avatar_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  location: string | null;
  email: string | null;
  bio: string | null;
} | null;
const initialState = { onlineUsers: [], loginUser: null };
interface userReducerInterface {
  onlineUsers: userType[];
  loginUser: userType;
}
interface userAction {
  type: string;
  payload?: any;
}
const userReducer = (
  state: userReducerInterface = initialState,
  action: userAction
) => {
  switch (action.type) {
    case "SIGNUP":
      let { onlineUsers } = state;
      let userList = [...onlineUsers];
      userList.push(action.payload);
      state = { ...state, onlineUsers: userList, loginUser: action.payload };
      return state;

    case "SET_ONLINE_USERS":
      state = { ...state, onlineUsers: action.payload };
      return state;

    case "SET_LOGIN_USER":
      state = { ...state, loginUser: action.payload };
      return state;
    default:
      return state;
  }
};
export default userReducer;
