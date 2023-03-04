import * as React from "react";
import SendMessage from "../conversation/SendMessage";
import ConversationList from "./ConversationList";
import UserSearch from "./ConversationSearch";

export interface SideBarProps { 
  onlineUserCount:number
}

export default function SideBar(props: SideBarProps) {

  return (
    <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
      {/* Divider */}
      <MobileMenu />
      {/* Advanced filter responsive toggler END */}
      <div className="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
        <div className=" d-flex justify-content-between align-items-center">
          <ActiveUsers count={props.onlineUserCount} />
          <NewChat />
        </div>
      </div>
      <nav className="navbar navbar-light navbar-expand-lg mx-0">
        <div
          className={`offcanvas offcanvas-start ${
            false && "( Mobile Hint Nik )show"
          }`}
        >
          {/* Offcanvas header */}
          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset ms-auto" />
          </div>
          {/* Offcanvas body */}
          <div className="offcanvas-body p-0">
            <div className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">
              {/* Search chat START */}
              <UserSearch />
              {/* Search chat END */}
              {/* Chat list tab START */}
              <ConversationList />
              {/* Chat list tab END */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const MobileMenu = () => (
  <div className="d-flex align-items-center mb-4 d-lg-none">
    <button
      className="border-0 bg-transparent"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <span className="btn btn-primary">
        <i className="fa-solid fa-sliders-h" />
      </span>
      <span className="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
    </button>
  </div>
);

const ActiveUsers = (props: { count: number }) => (
  <h1 className="h5 mb-0">
    Active chats &nbsp;
    <span className="badge bg-success bg-opacity-10 text-success">
      {props.count}
    </span>
  </h1>
);

/* Chat new create message item START */
const NewChat = () => (
  <>
    <div className="dropend position-relative">
      <div className="nav">
        <span className="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn">
          <i className="bi bi-pencil-square" />
        </span>
      </div>
    </div>
    <NewChatTost />
  </>
);
/* Chat new create message item END */

/* Chat toast START */
const NewChatTost = () => (
  <div className="position-fixed bottom-0 end-0 p-3">
    <div
      id="chatToast"
      className={`toast bg-mode fade ${false && "show"}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="false"
    >
      <div className="toast-header bg-mode d-flex justify-content-between">
        {/* Title */}
        <h6 className="mb-0">New message</h6>
        <button
          className="btn btn-secondary-soft-hover py-1 px-2"
          data-bs-dismiss="toast"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {/* Top avatar and status END */}
      <div className="toast-body collapse show" id="collapseChat">
        {/* Chat conversation START */}
        {/* Form */}
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text border-0">To</span>
            <input
              className="form-control"
              type="text"
              placeholder="Type a name or multiple names"
            />
          </div>
        </form>
        {/* Chat conversation END */}
        {/* Extra space */}
        <div className="h-200px" />
        {/* Button  */}
        {/* <SendMessage /> */}
        <div className="d-sm-flex align-items-end">
          <textarea
            className="form-control mb-sm-0 mb-3"
            placeholder="Type a message"
            rows={1}
            spellCheck="false"
            defaultValue={""}
          />
          <button className="btn btn-sm btn-danger-soft ms-sm-2">
            <i className="fa-solid fa-face-smile fs-6" />
          </button>
          <button className="btn btn-sm btn-secondary-soft ms-2">
            <i className="fa-solid fa-paperclip fs-6" />
          </button>
          <button className="btn btn-sm btn-primary ms-2">
            <i className="fa-solid fa-paper-plane fs-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
/* Chat toast END */
