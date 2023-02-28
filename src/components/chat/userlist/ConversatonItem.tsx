interface ConversationItemProps {
  isGroup: boolean;
  conersationImages: string[];
  conersationName: string;
  active: boolean;
  isOnline: boolean;
  haveStory: boolean;
  key: number;
  lastMessage: string;
}
export default function ConversationItem(props: ConversationItemProps) {
  let {
    key,
    conersationName,
    conersationImages,
    active,
    haveStory,
    isOnline,
    isGroup,
    lastMessage,
  } = props;
  return (
    <>
      <li key={key}>
        {/* Chat user tab item */}
        <span className={`nav-link text-start ${active && "active"}`}>
          <div className="d-flex">
            <div
              className={`flex-shrink-0 avatar me-2 ${
                !isGroup && haveStory && "avatar-story"
              } ${!isGroup && isOnline && "status-online"}`}
            >
              {isGroup ? (
                <GroupUser
                  memberAvatarDetail={[
                    { memberImage: "01.jpg", memberName: "ABCD" },
                    { memberImage: "02.jpg", memberName: "BCD" },
                    { memberImage: "03.jpg", memberName: "CD" },
                    { memberImage: "04.jpg", memberName: "D" },
                  ]}
                />
              ) : (
                <img
                  className="avatar-img rounded-circle"
                  src={conersationImages[0]}
                  alt={conersationName}
                />
              )}
            </div>
            <div className="flex-grow-1 d-block overflow-hidden">
              <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
              <div className="small text-secondary">
                You: Okay thanks, everyone.
              </div>
            </div>
          </div>
        </span>
      </li>
    </>
  );
}
interface GroupUserInterface {
  memberAvatarDetail: { memberImage: string; memberName: string }[];
}
const GroupUser = (props: GroupUserInterface) => {
  const { memberAvatarDetail } = props;
  const dAvatarCount = memberAvatarDetail.length;
  return (
    <ul
      className={`avatar-group avatar-group-${
        ["one", "two", "three", "four"][
          dAvatarCount - 1 < 4 ? dAvatarCount - 1 : 4
        ]
      }`}
    >
      {memberAvatarDetail.slice(0, 3).map((avatar, index) => (
        <li
          key={index}
          className={`avatar avatar-${dAvatarCount > 3 ? "xx" : "x"}s`}
        >
          <img
            className="avatar-img rounded-circle"
            src={`https://social.webestica.com/assets/images/avatar/${avatar.memberImage}`}
            alt="avatar"
          />
        </li>
      ))}
      {dAvatarCount > 3 && (
        <li
          key={4}
          className={`avatar avatar-${dAvatarCount > 3 ? "xx" : "x"}s`}
        >
          <img
            className="avatar-img rounded-circle"
            src={`https://social.webestica.com/assets/images/avatar/placeholder.jpg`}
            alt="avatar"
          />
        </li>
      )}
    </ul>
  );
};
