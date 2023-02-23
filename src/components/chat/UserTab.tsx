export default function UserTab() {
    return <> {/* Chat list tab START */}
        <div className="mt-4 h-100">
            <div className="chat-tab-list custom-scrollbar os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y"><div className="os-resize-observer-host observed"><div className="os-resize-observer" style={{ left: '0px', right: 'auto' }} /></div><div className="os-size-auto-observer observed" style={{ height: 'calc(100% + 1px)', float: 'left' }}><div className="os-resize-observer" /></div><div className="os-content-glue" style={{ margin: '0px', width: '252px', height: '446px' }} /><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" style={{ overflowY: 'scroll' }}><div className="os-content" style={{ padding: '0px', height: '100%', width: '100%' }}>
                <ul className="nav flex-column nav-pills nav-pills-soft" role="tablist">
                    <li>
                        {/* Chat user tab item */}
                        <span className="nav-link active text-start"   >
                            <div className="d-flex">
                                <div className="flex-shrink-0 avatar avatar-story me-2 status-online"> {/*status-offline  avatar-story*/}
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                </div>
                                <div className="flex-grow-1 d-block">
                                    <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                                    <div className="small text-secondary">Frances sent a photo.</div>
                                </div>
                            </div>
                        </span>
                    </li>
                    <GroupUser />
                </ul>
            </div>
            </div></div>
                <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                    <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div className="os-scrollbar-handle" style={{ width: '100%', transform: 'translate(0px, 0px)' }} />
                    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                    <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div className="os-scrollbar-handle" style={{ height: '91.5984%', transform: 'translate(0px, 0px)' }} />
                    </div></div><div className="os-scrollbar-corner" /></div>
        </div>
        {/* Chat list tab END */}</>
}







const GroupUser = () => <li data-bs-dismiss="offcanvas">
    <a href="#chat-6" className="nav-link text-start" id="chat-6-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabIndex={-1}>
        <div className="d-flex">
            <div className="flex-shrink-0 avatar me-2">
                <ul className="avatar-group avatar-group-four"> {/**avatar-group-two */}
                    <li className="avatar avatar-xxs">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                    </li>
                    <li className="avatar avatar-xxs">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                    </li>
                    <li className="avatar avatar-xxs">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                    </li>
                    <li className="avatar avatar-xxs">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="avatar" />
                    </li>
                </ul>
            </div>
            <div className="flex-grow-1 d-block overflow-hidden">
                <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                <div className="small text-secondary">You: Okay thanks, everyone.</div>
            </div>
        </div>
    </a>
</li>