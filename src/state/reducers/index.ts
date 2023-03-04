
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userReducer";
import chatReducer from "./../../components/chat/chatReducer"

const store = configureStore({reducer:{user:userReducer,chat:chatReducer}})
export default store;
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch