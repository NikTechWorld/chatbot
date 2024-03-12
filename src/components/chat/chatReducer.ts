const initialState = { activeChat: {}, messages: [] };
interface chatReducerInterface {
  activeChat: object;
  messages: any[];
}
interface userAction {
  type: string;
  payload?: any;
}
const chatReducer = (
  state: chatReducerInterface = initialState,
  action: userAction
) => {
  switch (action.type) {
    case "SET_ACTIVE_CHAT":
      return { ...state, activeChat: action.payload };
    case "SET_MESSAGE":
      let messagesData = [...state.messages];
      messagesData.push(action.payload);
      return { ...state, messages: messagesData };
    default:
      return state;
  }
};
export default chatReducer;
