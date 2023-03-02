import { Dispatch } from "redux";
import asyncApiCall from "../config/api";
import * as helper from "./../config/helper";
interface userInterface {}
export const createUser = (user: userInterface) => {
  return async (dispatch: Dispatch<{ type: string; payload: object }>) => { 
    let responce = await asyncApiCall("/user/create", "POST", user);
    console.log("server", responce);
    // dispatch(updateReducer("SIGNUP", user))
  };
};
export const getActiveUser = () => {
  return (dispatch: Dispatch<{ type: string; payload: object }>) => {
    dispatch(
      updateReducer("GET_LOGIN_USER", helper.parseJwt(helper.getAccessToken()))
    );
  };
};
export const getOnlineUser=()=>{
  return (dispatch: Dispatch<{ type: string; payload: object }>) => {

  }
}
const updateReducer = (type: string, payload: object) => {
  return {
    type,
    payload,
  };
};
