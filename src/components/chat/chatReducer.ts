
const initialState = {activeChat:{},messages:[]};
interface chatReducerInterface { 
    activeChat:object,
    messages:any[]
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
            state = { ...state, activeChat: action.payload };
            return state;    
        case "SET_MESSAGE":
            let messagesData=state.messages;
            messagesData.push(action.payload);
            state={...state,messages:messagesData}
            return state;
        default:return state;
    }
}
export default chatReducer;