import ConversationItem from "./ConversatonItem";

export default function ConversationList() {
  return ( 
      <div className="mt-4 h-100">
        <div className="chat-tab-list custom-scrollbar os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y">
          <div className="os-resize-observer-host observed">
            <div
              className="os-resize-observer"
              style={{ left: "0px", right: "auto" }}
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
            style={{ margin: "0px", width: "252px", height: "446px" }}
          />
          <div className="os-padding">
            <div
              className="os-viewport os-viewport-native-scrollbars-invisible"
              style={{ overflowY: "scroll" }}
            >
              <div
                className="os-content"
                style={{ padding: "0px", height: "100%", width: "100%" }}
              >
                <ul
                  className="nav flex-column nav-pills nav-pills-soft"
                  role="tablist"
                >
                  <ConversationItem 
                  isGroup={true} 
                  conersationImages={["https://social.webestica.com/assets/images/avatar/10.jpg"]}
                   active={true}
                   isOnline={true}
                   haveStory={true} 
                   conersationName="Frances Guerrero"
                   lastMessage=" Frances sent a photo. os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"/> 
                </ul>
              </div>
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track os-scrollbar-track-off">
              <div
                className="os-scrollbar-handle"
                style={{ width: "100%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track os-scrollbar-track-off">
              <div
                className="os-scrollbar-handle"
                style={{ height: "91.5984%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar-corner" />
        </div>
      </div> 
  );
}


