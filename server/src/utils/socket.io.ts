import { Server,Socket } from "socket.io"; 
import logger from '../utils/logger';
const EVENTS={
    connection:"connection"
}
function scoket({io}:{io:Server}){
    
    logger.info("Socket enabled");
    io.on(EVENTS.connection, (socket:Socket) => {
        console.log(`user connected ${socket.id}`);
    });
}
export default scoket;