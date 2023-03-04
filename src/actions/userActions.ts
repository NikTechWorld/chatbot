import { Dispatch } from "redux";
import asyncApiCall from "../config/api";
import * as helper  from "./../config/helper";
interface userInterface { }
export const createUser = (user: userInterface) => {
  return async (dispatch: Dispatch<{ type: string; payload: object }>) => {
    await asyncApiCall("/user/create", "POST", user);
    dispatch(helper.updateReducer("SIGNUP", user));
  };
};

export const setActiveUser = () => {
  return (dispatch: Dispatch<{ type: string; payload: object }>) => {
    dispatch(
      helper.updateReducer("SET_LOGIN_USER", helper.parseJwt(helper.getAccessToken()))
    );
  };
};

export const setOnlineUser = (users: any[]) => {
  return async (dispatch: Dispatch<{ type: string; payload: object }>) => {
    if (users) users = users.map((u: any) => u.userId);  
    if(users.length)
    {
      let responce = await asyncApiCall("/user/allUserById", "POST", users); 
      dispatch(helper.updateReducer("SET_ONLINE_USERS", responce));
    }
  };
};

