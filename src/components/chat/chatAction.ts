import { Dispatch } from "redux";
import { updateReducer } from "../../config/helper";
export const setActiveChat = (user: any) => {
  return async (dispatch: Dispatch<{ type: string; payload: object }>) => {
    dispatch(updateReducer("SET_ACTIVE_CHAT", user));
  };
}
export const setMessage = (senderId: any, message: string) => {
  return async (dispatch: Dispatch<{ type: string; payload: object }>) => {
    var currentdate = new Date();
    let hours = currentdate.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var datetime = hours + ":"
      + currentdate.getMinutes() + ampm
    const data = { senderId, message, timestemp: datetime };
    dispatch(updateReducer("SET_MESSAGE", data));
  };
}