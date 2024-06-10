// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const formattedTime = extractTime(message.createdAt);
//   const chatClassName = fromMe ? "chat-end" : "chat-start";
//   const profilePic = fromMe
//     ? authUser.profilePic
//     : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? "bg-blue-500" : "";
//   const shakeClass = message.shouldShake ? "shake" : "";

  return (
    //  ${chatClassName}
    <div className={`chat`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            {/* src={profilePic} */}
          <img alt="Tailwind CSS chat bubble component"  />
        </div>
      </div>
      {/* ${bubbleBgColor} ${shakeClass} */}
      <div
        className={`chat-bubble text-white  pb-2`}
      >
        {/* {message.message} */}
        ss
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {/* {formattedTime} */}
        sd
      </div>
    </div>
  );
};
export default Message;
