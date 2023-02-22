import { useMemo } from "react";
import { useSocket } from "../context/SocketContext"

export default function ChatBoxUI(){
    const {setUserName,userName}=useSocket();
    
    const handleSetUserNsme=(e:React.ChangeEvent<HTMLFormElement>)=>{
        // let str=useMemo(()=>{return userName;},[userName])
        setUserName()
    }
    return <>
    <div>
        <input type={"text"} placeholder="userName"/>
    </div>
    </>
}