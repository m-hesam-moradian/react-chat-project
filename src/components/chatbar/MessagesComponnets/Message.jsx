import React from "react";

const Message = () => {
  return (
    <>
      <div className="Message">
        <div className="message-info">
          <img className="message-prfile" src="/images/me.png" alt="" />
          <span>just now</span>
        </div>
        <div className="message-content">
          <p>hello</p>
        </div>
      </div>
      <div className="Message myMessage ">
        <div className="message-info">
          <img className="message-prfile" src="/images/me.png" alt="" />
          <span>just now</span>
        </div>
        <div className="message-content">
          <p>
            hi whats app man Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Velit cum odio eligendi, sunt sapiente deleniti quibusdam
            excepturi odit itaque aut, repellendus perferendis veniam quos.
            Omnis, atque repudiandae. Voluptas, deserunt omnis.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Message;
