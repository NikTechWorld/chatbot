import { Server, Socket } from "socket.io";
import logger from './utils/logger'
const EVENTS = { connection: "connection" }
export default function socket({ io }: { io: Server }) {
    logger.info(`sockets enabled`);
    io.on(EVENTS.connection, (socket: Socket) => {
        logger.info(`user connected ${socket.id}`)
    })
} 