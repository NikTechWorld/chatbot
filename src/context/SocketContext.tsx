import io from "socket.io-client";
import { createContext, useContext, useEffect } from "react";
import EVENTS from "../config/events";
import * as helper from "../config/helper";
var connectionOptions = {
  "force new connection": true,
  timeout: 10000,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 3,
  transports: ["websocket"],
};
const user = helper.parseJwt(helper.getAccessToken());
const socket = io(process.env.REACT_APP_BACKEND_URL || "", connectionOptions);
interface Context {
  socket: any;
  user: any;
}
const SocketContext = createContext<Context>({
  socket,
  user,
});
function SocketProvider(props: any) {
  useEffect(() => {
    socket.emit(EVENTS.USER.CREATE, user.id);
  }, []);
  return (
    <SocketContext.Provider
      value={{
        socket,
        user,
      }}
      {...props}
    />
  );
}
export const useSocket = () => useContext(SocketContext);
export default SocketProvider;
