import SendMessage from "./SendMessage";

export default function UserConversation() {
    {/* Chat conversation START */ }
    return <div className="col-lg-8 col-xxl-9">
        <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
            <div className="card-body h-100">
                <div className="tab-content py-0 mb-0 h-100" id="chatTabsContent">
                    {/* Conversation item START */}
                    <div className=" tab-pane show active h-100" id="chat-1" role="tabpanel" aria-labelledby="chat-1-tab">
                        <TopAvatarAndStatus isGroup={false} />
                        <Conversation isGroup={false}  />
                    </div>
                    {/* Conversation item END */}
                </div>
            </div>
            <SendMessage />
        </div>
    </div>
    {/* Chat conversation END */ }
}
const TopAvatarAndStatus = (props: { isGroup: boolean }) => {
    return <>{/* Top avatar and status START */}
        <div className="d-sm-flex justify-content-between align-items-center">
            <div className="d-flex mb-2 mb-sm-0">
                <div className="flex-shrink-0 avatar me-2">
                    {props.isGroup ? <><ul className="avatar-group avatar-group-four">
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
                    </ul></> :
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />}
                </div>
                {props.isGroup ? <><div className="flex-grow-1 d-block overflow-hidden">
                    <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                    <div className="small text-secondary">You: Okay thanks, everyone.</div>
                </div></> :
                    <div className="d-block flex-grow-1">
                        <h6 className="mb-0 mt-1">Judy Nguyen</h6>
                        <div className="small text-secondary"><i className="fa-solid fa-circle text-success me-1" />Online</div>
                    </div>}
            </div>

            {/* Futer Work */}
            {false && <div className="d-flex align-items-center">
                {/* Call button */}
                <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Audio call" data-bs-original-title="Audio call"><i className="bi bi-telephone-fill" /></a>
                <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Video call" data-bs-original-title="Video call"><i className="bi bi-camera-video-fill" /></a>
                {/* Card action START */}
                <div className="dropdown">
                    <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown6" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown6">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon" />Mute conversation</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete chat</a></li>
                        <li className="dropdown-divider" />
                        <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive chat</a></li>
                    </ul>
                </div>
                {/* Card action END */}
            </div>}
        </div>
        <hr />
        {/* Top avatar and status END */}</>
}

const Conversation = (props: { isGroup: boolean }) => {
    return props.isGroup ? <>  {/* Chat conversation START */}
        <div className="chat-conversation-content custom-scrollbar os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition"><div className="os-resize-observer-host observed"><div className="os-resize-observer" style={{ left: '0px', right: 'auto' }} /></div><div className="os-size-auto-observer observed" style={{ height: 'calc(100% + 1px)', float: 'left' }}><div className="os-resize-observer" /></div><div className="os-content-glue" style={{ margin: '0px' }} /><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" style={{ overflow: 'visible' }}><div className="os-content" style={{ padding: '0px', height: '100%', width: '100%' }}>
            {/* Chat time */}
            <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper allowance am northward😍</div>
                            <div className="small my-2">6:15 AM</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated files</div>
                            {/* Files START */}
                            {/* Files END */}
                            <div className="small my-2">12:16 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent 🥰 curiosity yet attempted happiness Gay prosperous impression.</div>
                            <div className="small my-2">3:22 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat time */}
            <div className="text-center small my-2">2 New Messages</div>
            {/* Chat message left */}
            <div className="d-flex mb-2">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-2 px-3 rounded-2">Traveling alteration impression six all uncommonly Chamber hearing inhabit joy highest privat.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-2 px-3 rounded-2">Attempted happiness Gay prosperous impression.</div>
                            <div className="small my-2">3:22 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-3 rounded-2">
                                <div className="typing d-flex align-items-center">
                                    <div className="dot" />
                                    <div className="dot" />
                                    <div className="dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" style={{ transform: 'translate(0px, 0px)' }} /></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" style={{ transform: 'translate(0px, 0px)' }} /></div></div><div className="os-scrollbar-corner" /></div>
        {/* Chat conversation END */}</> : <>
        <div className="chat-conversation-content custom-scrollbar os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y"><div className="os-resize-observer-host observed"><div className="os-resize-observer" style={{ left: '0px', right: 'auto' }} /></div><div className="os-size-auto-observer observed" style={{ height: 'calc(100% + 1px)', float: 'left' }}><div className="os-resize-observer" /></div><div className="os-content-glue" style={{ margin: '0px', width: '839px', height: '437px' }} /><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" style={{ overflowY: 'scroll' }}><div className="os-content" style={{ padding: '0px', height: '100%', width: '100%' }}>
            {/* Chat time */}
            <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                <p className="small mb-0">Congratulations:)</p>
                                <div className="card shadow-none p-2 border border-2 rounded mt-2">
                                    <img src="assets/images/elements/14.svg" alt="" />
                                </div>
                            </div>
                            <div className="small my-2">3:22 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat message right */}
            <div className="d-flex justify-content-end text-end mb-1">
                <div className="w-100">
                    <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">And sir dare view but over man So at within mr to simple assure Mr disposing.</div>
                        {/* Images */}
                        <div className="d-flex my-2">
                            <div className="small text-secondary">5:35 PM</div>
                            <div className="small ms-2"><i className="fa-solid fa-check" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat message right */}
            <div className="d-flex justify-content-end text-end mb-1">
                <div className="w-100">
                    <div className="d-flex flex-column align-items-end">
                        <img className="rounded h-200px" src="assets/images/avatar/05.jpg" alt="" />
                        <div className="small my-2">5:36 PM</div>
                    </div>
                </div>
            </div>
            {/* Chat time */}
            <div className="text-center small my-2">2 New Messages</div>
            {/* Chat message left */}
            <div className="d-flex mb-2">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-2 px-3 rounded-2">Traveling alteration impression 🤐 six all uncommonly Chamber hearing inhabit joy highest private.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat message left */}
            <div className="d-flex mb-1">
                <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                </div>
                <div className="flex-grow-1">
                    <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                            <div className="bg-light text-secondary p-3 rounded-2">
                                <div className="typing d-flex align-items-center">
                                    <div className="dot" />
                                    <div className="dot" />
                                    <div className="dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" style={{ width: '100%', transform: 'translate(0px, 0px)' }} /></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" style={{ height: '42.8991%', transform: 'translate(0px, 0px)' }} /></div></div><div className="os-scrollbar-corner" /></div>
        {/* Chat conversation END */}</>
}
