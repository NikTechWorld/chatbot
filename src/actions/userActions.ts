import { Dispatch } from "redux"
import asyncApiCall from "../config/api"
import * as helper from "./../config/helper"
interface userInterface { }
export const createUser = (user: userInterface) => {
    return async (dispatch: Dispatch<{ type: string, payload: object }>) => {
        user={
            "login": "NiksRock",
            "id": 34954732,
            "avatar_url": "https://avatars.githubusercontent.com/u/34954732?v=4",
            "type": "User",
            "site_admin": false,
            "name": "Nikunj Patel",
            "location": null,
            "email": null,
            "bio": null
        }
        let responce = await asyncApiCall("/user/create", "POST", user)
        console.log("server",responce)
        // dispatch(updateReducer("SIGNUP", user))
    }
}
export const getActiveUser = () => {
    return (dispatch: Dispatch<{ type: string, payload: object }>) => {
        dispatch(updateReducer("GET_LOGIN_USER", helper.parseJwt(helper.getAccessToken())))
    }
}
const updateReducer = (type: string, payload: object) => {
    return {
        type,
        payload
    };
}