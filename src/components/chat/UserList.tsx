import UserConversation from "./UserConversation";
import UserSearch from "./UserSearch";
import UserTab from "./UserTab";

export default function UserList() {
    return <div className="container">
         
        <div className="row gx-0">
            {/* Sidebar START */}
            <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
                {/* Divider */}
                <div className="d-flex align-items-center mb-4 d-lg-none">
                    <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="btn btn-primary"><i className="fa-solid fa-sliders-h" /></span>
                        <span className="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
                    </button>
                </div>
                {/* Advanced filter responsive toggler END */}
                <div className="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
                    <div className=" d-flex justify-content-between align-items-center">
                        <h1 className="h5 mb-0">Active chats <span className="badge bg-success bg-opacity-10 text-success">6</span></h1>
                        {/* Chat new create message item START */}
                        <div className="dropend position-relative">
                            <div className="nav">
                                <a className="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn" data-target="chatToast" href="#"> <i className="bi bi-pencil-square" /> </a>
                            </div>
                        </div>
                        {/* Chat new create message item END */}
                    </div>
                </div>
                <nav className="navbar navbar-light navbar-expand-lg mx-0">
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
                        {/* Offcanvas header */}
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" />
                        </div>
                        {/* Offcanvas body */}
                        <div className="offcanvas-body p-0">
                            <div className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">
                                <UserSearch/>
                                <UserTab/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Sidebar START */}
            <UserConversation/>
        </div> {/* Row END */}
        {/* =======================
Chat END */}
    </div>
}
