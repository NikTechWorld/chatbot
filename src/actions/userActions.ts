import { Dispatch } from "redux"
interface userInterface { }
export const createUser = (user: userInterface) => {
    return (dispatch: Dispatch<{ type: string, payload: object }>) => {
        dispatch(updateReducer("SIGNUP", user))
    }
}
const updateReducer = (type: string, payload: object) => {
    return {
        type,
        payload
    };
}