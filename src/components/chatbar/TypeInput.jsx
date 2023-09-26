import React from "react";
import { IoAttachSharp } from "react-icons/io";

const TypeInput = () => {
  return (
    <div className="TypeInput">
      <input type="text" />
      <div className="input-icons">
        <GrAttachment></GrAttachment>
        <button>send</button>
      </div>
    </div>
  );
};
export default TypeInput;
