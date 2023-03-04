import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import * as helper from "./../config/helper"
// import ErrorPage from "../components/Error/errorPage";
import Login from "../components/landing/Login";
import OAuth from "../components/OAuth";
import Chat from "../components/chat/Chat";
export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [{ path: "/", element: helper.haveAuthorizeToken() ? <Chat /> : <Login /> }]
  },
  { path: "/login", element: <Login /> },
  { path: "/oauth", element: <OAuth /> },
]); 
