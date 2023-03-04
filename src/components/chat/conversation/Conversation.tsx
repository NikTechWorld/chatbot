import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EVENTS from "../../../config/events";
import { useSocket } from "../../../context/SocketContext";
import * as chatAction from "../../../components/chat/chatAction";

const Conversation = (props: any) => {
    const { socket, user } = useSocket();
    React.useEffect(() => {
        socket.on(EVENTS.MESSAGE.GET, (data: any) => {
            props.chatAction.setMessage(data.senderId, data.message)
        });
    }, []);
    let { messages,activeChat } = props.state.chat;
    return props.isGroup ? (
        <>
            <div className="chat-conversation-content custom-scrollbar os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y">
                <div className="os-resize-observer-host observed">
                    <div
                        className="os-resize-observer"
                        style={{ left: 0, right: "auto" }}
                    />
                </div>
                <div
                    className="os-size-auto-observer observed"
                    style={{ height: "calc(100% + 1px)", float: "left" }}
                >
                    <div className="os-resize-observer" />
                </div>
                <div
                    className="os-content-glue"
                    style={{ margin: 0, width: 839, height: 190 }}
                />
                <div className="os-padding">
                    <div
                        className="os-viewport os-viewport-native-scrollbars-invisible"
                        style={{ overflowY: "scroll" }}
                    >
                        <div
                            className="os-content"
                            style={{ padding: 0, height: "100%", width: "100%" }}
                        >
                            {/* Chat time */}
                            <div className="text-center small my-2">
                                Jul 16, 2022, 06:15 am
                            </div>
                            {/* Chat message left */}
                            <div className="d-flex mb-1">
                                <div className="flex-shrink-0 avatar avatar-xs me-2">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="https://social.webestica.com/assets/images/avatar/02.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="w-100">
                                        <div className="d-flex flex-column align-items-start">
                                            <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                Applauded no discovery in newspaper allowance am
                                                northward😍
                                            </div>
                                            <div className="small my-2">6:15 AM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Chat message left */}
                            <div className="d-flex mb-1">
                                <div className="flex-shrink-0 avatar avatar-xs me-2">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="https://social.webestica.com/assets/images/avatar/03.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="w-100">
                                        <div className="d-flex flex-column align-items-start">
                                            <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                Please find the attached updated files
                                            </div>
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
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="https://social.webestica.com/assets/images/avatar/04.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="w-100">
                                        <div className="d-flex flex-column align-items-start">
                                            <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                How promotion excellent 🥰 curiosity yet attempted
                                                happiness Gay prosperous impression.
                                            </div>
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
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="https://social.webestica.com/assets/images/avatar/05.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="w-100">
                                        <div className="d-flex flex-column align-items-start">
                                            <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                Traveling alteration impression six all uncommonly
                                                Chamber hearing inhabit joy highest privat.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Chat message left */}
                            <div className="d-flex mb-1">
                                <div className="flex-shrink-0 avatar avatar-xs me-2">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="https://social.webestica.com/assets/images/avatar/06.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="w-100">
                                        <div className="d-flex flex-column align-items-start">
                                            <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                Attempted happiness Gay prosperous impression.
                                            </div>
                                            <div className="small my-2">3:22 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Chat message left */}
                            <div className="d-flex mb-1">
                                <div className="flex-shrink-0 avatar avatar-xs me-2">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="https://social.webestica.com/assets/images/avatar/07.jpg"
                                        alt=""
                                    />
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
                        </div>
                    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                    <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div
                            className="os-scrollbar-handle"
                            style={{ transform: "translate(0px, 0px)", width: "100%" }}
                        />
                    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                    <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div
                            className="os-scrollbar-handle"
                            style={{ transform: "translate(0px, 0px)", height: "40.9871%" }}
                        />
                    </div>
                </div>
                <div className="os-scrollbar-corner" />
            </div>
        </>
    ) : (
        <>
            {/* on mobile add => os-host-scrollbar-vertical-hidden =>remove os-host-overflow*/}
            <div className="chat-conversation-content custom-scrollbar os-host os-theme-dark os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                <div className="os-resize-observer-host observed">
                    <div
                        className="os-resize-observer"
                        style={{ left: 0, right: "auto" }}
                    />
                </div>
                <div
                    className="os-size-auto-observer observed"
                    style={{ height: "calc(100% + 1px)", float: "left" }}
                >
                    <div className="os-resize-observer" />
                </div>
                <div className="os-content-glue" style={{ margin: 0 }} />
                <div className="os-padding">
                    <div
                        className="os-viewport os-viewport-native-scrollbars-invisible"
                        style={{ overflowY: "scroll" }} //on mobile visible
                    >
                        <div
                            className="os-content"
                            style={{ padding: 0, height: "100%", width: "100%" }}
                        >
                            {/* Chat time */}
                            {/* <div className="text-center small my-2">
                  Jul 16, 2022, 06:15 am
                </div> */}
                            {/* Chat message left */}
                            <>
                                {messages.map((mData: any) => mData?.senderId === activeChat.id ? <div className="d-flex mb-1">
                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src={activeChat?.avatar_url}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-start">
                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                    {mData?.message}
                                                </div>
                                                <div className="small my-2">{mData?.timestemp}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : <div className="d-flex justify-content-end text-end mb-1">
                                    <div className="w-100">
                                        <div className="d-flex flex-column align-items-end">
                                            <div className="bg-primary text-white p-2 px-3 rounded-2">
                                                {mData?.message}
                                            </div>
                                            <div className="d-flex my-2">
                                                <div className="small text-secondary">{mData?.timestemp}</div>
                                                <div className="small ms-2"><i className="fa-solid fa-check"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                            </>
                            {/* Chat message left */}
                            {/* <div className="d-flex mb-1">
                  <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src="https://social.webestica.com/assets/images/avatar/10.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-start">
                        <div className="bg-light text-secondary p-2 px-3 rounded-2">
                          <p className="small mb-0">Congratulations:)</p>
                          <div className="card shadow-none p-2 border border-2 rounded mt-2">
                            <img
                              src="https://social.webestica.com/assets/images/elements/14.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="small my-2">3:22 PM</div>
                      </div>
                    </div>
                  </div>
                </div> */}
                            {/* Chat message right */}
                            {/* <div className="d-flex justify-content-end text-end mb-1">
                  <div className="w-100">
                    <div className="d-flex flex-column align-items-end">
                      <img
                        className="rounded h-200px"
                        src="https://social.webestica.com/assets/images/avatar/05.jpg"
                        alt=""
                      />
                      <div className="small my-2">5:36 PM</div>
                    </div>
                  </div>
                </div> */}
                            {/* Chat time */}
                            <div className="text-center small my-2">2 New Messages</div>
                            {/* Chat message left */}
                            {/* <div className="d-flex mb-1">
                  <div className="flex-shrink-0 avatar avatar-xs me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src="https://social.webestica.com/assets/images/avatar/10.jpg"
                      alt=""
                    />
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
                </div> */}
                        </div>
                    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                    <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div
                            className="os-scrollbar-handle"
                            style={{
                                width: "100%",
                                transform: "translate(0px, 0px)",
                            }}
                        />
                    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                    <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div
                            className="os-scrollbar-handle"
                            style={{
                                height: "18.7071%",
                                transform: "translate(0px, 152px)",
                            }}
                        />
                    </div>
                </div>
                <div className="os-scrollbar-corner" />
            </div>
        </>
    );
};
function mapStateToProps(state: any) {
    return { state };
}
function mapDispatchToProps(dispatch: any) {
    return {
        chatAction: bindActionCreators(chatAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Conversation);