import logger from "pino";
import dayjs from "dayjs";
const log=logger({
    prettifire:true,
    base:{
        pid:false
    },
    timestamp:()=>`,"time":${dayjs().format()}`
    
})
export default log;