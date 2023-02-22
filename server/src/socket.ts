import { Server, Socket } from "socket.io";
import { nanoid } from "nanoid";
import logger from "./utils/logger";
const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
  },
  SERVER: {
    ROOMS: "ROOMS",
    JOINED_ROOM: "JOINED_ROOM",
    ROOM_MESSAGE: "ROOM_MESSAGE",
  },
};
const rooms: Record<string, { name: string }> = {};
export default function socket({ io }: { io: Server }) {
  logger.info(`sockets enabled`);
  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`user connected ${socket.id}`);

    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName }) => {
      const roomId = nanoid();
      rooms[roomId] = { name: roomName };
      socket.join(roomId);
      socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
      socket.emit(EVENTS.SERVER.ROOMS, rooms);
      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });
    
    socket.on(
      EVENTS.CLIENT.SEND_ROOM_MESSAGE,
      ({ roomId, message, userName }) => {
        const date = new Date();
        socket
          .to(roomId)
          .emit(EVENTS.SERVER.ROOM_MESSAGE, {
            message,
            userName,
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds}`,
          });
      }
    );
  });
}
