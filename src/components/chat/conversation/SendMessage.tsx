import React from "react";
import EVENTS from "../../../config/events";
import { useSocket } from "../../../context/SocketContext";

export default function SendMessage(props: any) {
  let { senderId, receiverId } = props;
  const { socket } = useSocket();
  const [message, setMessage] = React.useState("");
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    socket.emit(EVENTS.MESSAGE.SEND, { senderId, receiverId, message });
  };
  return (
    <div className="d-sm-flex align-items-end">
      <textarea
        className="form-control mb-sm-0 mb-3"
        data-autoresize=""
        placeholder="Type a message"
        rows={1}
        defaultValue={""}
        onChange={(e) => setMessage(e.target.value.trim())}
      />
      <button className="btn btn-sm btn-danger-soft ms-sm-2">
        <i className="fa-solid fa-face-smile fs-6" />
      </button>
      <button className="btn btn-sm btn-secondary-soft ms-2">
        <i className="fa-solid fa-paperclip fs-6" />
      </button>
      <button
        className="btn btn-sm btn-primary ms-2"
        onClick={(e) => sendMessage(e)}
      >
        <i className="fa-solid fa-paper-plane fs-6" />
      </button>
    </div>
  );
}
