import React from "react";

// Iterate over each message object and print them
// in an unordered list
const Messages = (props) => {
  const { messages } = props;
  return (
    <div>
      <ul>
        {messages
          ? messages.map((message) => (
              <li key={message.time}>{message.body}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Messages;
