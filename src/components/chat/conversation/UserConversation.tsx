import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useSocket } from "../../../context/SocketContext";
import SendMessage from "./SendMessage";
import * as chatAction from "./../chatAction";
import Conversation from "./Conversation";

function UserConversation(props: any) {
  let { activeChat } = props.state.chat;
  let { user } = useSocket();
  return (
    <div
      className="col-lg-8 col-xxl-9"
      style={{ height: "calc(100vh - 149px)" }}
    >
      <div
        className="card card-chat rounded-start-lg-0 border-start-lg-0"
        style={{ height: "inherit" }}
      >
        <div className="card-body h-100">
          <div className="tab-content py-0 mb-0 h-100">
            <div
              className="fade tab-pane h-100 active show"
              id="chat-1"
              role="tabpanel"
              aria-labelledby="chat-1-tab"
            >
              <TopAvatarAndStatus isGroup={false} {...activeChat} />
              <hr />
              <Conversation isGroup={false} {...activeChat} />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <SendMessage senderId={user?.id} receiverId={activeChat?.id} />
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state: any) {
  return { state };
}
function mapDispatchToProps(dispatch: any) {
  return {
    chatAction: bindActionCreators(chatAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserConversation);

const TopAvatarAndStatus = (props: {
  isGroup: boolean;
  login: string;
  id: number;
  avatar_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  location: string | null;
  email: string | null;
  bio: string | null;
}) => {
  let { avatar_url, name, login } = props;
  return (
    <div className="d-sm-flex justify-content-between align-items-center">
      <div className="d-flex mb-2 mb-sm-0">
        <div className="flex-shrink-0 avatar me-2">
          <img
            className="avatar-img rounded-circle"
            src={avatar_url}
            alt={name || login}
          />
        </div>
        <div className="d-block flex-grow-1">
          <h6 className="mb-0 mt-1">{name || login}</h6>
          <div className="small text-secondary">
            {props.isGroup ? (
              <>You: Okay thanks, everyone.</>
            ) : (
              <>
                <i className="fa-solid fa-circle text-success me-1" />
                Online
              </>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        {/* Call button */}
        <span className="icon-md rounded-circle btn btn-primary-soft me-2 px-2">
          <i className="bi bi-telephone-fill" />
        </span>
        <span className="icon-md rounded-circle btn btn-primary-soft me-2 px-2">
          <i className="bi bi-camera-video-fill" />
        </span>
        {/* Card action START */}
        <div className="dropdown">
          <span className="icon-md rounded-circle btn btn-primary-soft me-2 px-2">
            <i className="bi bi-three-dots-vertical" />
          </span>
          <ul
            className="dropdown-menu dropdown-menu-end {Nik-Hint show}"
            style={{
              position: "absolute",
              inset: "0px 0px auto auto",
              margin: "0px",
              transform: "translate(-8px, 42px)",
            }}
          >
            <li>
              <span className="dropdown-item">
                <i className="bi bi-check-lg me-2 fw-icon" />
                Mark as read
              </span>
            </li>
            <li className="dropdown-divider" />
            <li>
              <span className="dropdown-item">
                <i className="bi bi-check-lg me-2 fw-icon" />
                Mark as read
              </span>
            </li>
          </ul>
        </div>
        {/* Card action END */}
      </div>
    </div>
  );
};
