import { Dispatch } from "redux";
import asyncApiCall from "../config/api";
import * as helper from "./../config/helper";
interface userInterface {}
export const createUser = (user: userInterface) => {
  return async (dispatch: Dispatch<{ type: string; payload: object }>) => {
    let responce = await asyncApiCall("/user/create", "POST", user);
    dispatch(updateReducer("SIGNUP", responce));
  };
};

export const getActiveUser = () => {
  return (dispatch: Dispatch<{ type: string; payload: object }>) => {
    dispatch(
      updateReducer("GET_LOGIN_USER", helper.parseJwt(helper.getAccessToken()))
    );
  };
};

export const getOnlineUser = (users: any[]) => {
  return async (dispatch: Dispatch<{ type: string; payload: object }>) => {
    if (users) users = users.map((u: any) => u.userId);
    let responce = await asyncApiCall("/user/allUserById", "POST", users);
    dispatch(updateReducer("GET_ONLINE_USERS", responce));
  };
};

const updateReducer = (type: string, payload: object) => {
  return {
    type,
    payload,
  };
};
