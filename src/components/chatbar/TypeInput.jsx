import React from "react";
import { IoMdAttach } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { BiSolidSend } from "react-icons/bi";


const TypeInput = () => {
  return (
    <div className="TypeInput">
      <input className="text-input" type="text" placeholder="type here..." />
      <div className="input-icons">
        <input className="d-none" type="file" id="file-message-send" />
        <label htmlFor="file-message-send">
          <IoMdAttach />
        </label>
        <input className="d-none" type="file" id="media-message-send" />

        <label htmlFor="file-message-send">
          <LuImagePlus />
        </label>

        <button>send <BiSolidSend></BiSolidSend></button>
      </div>
    </div>
  );
};
export default TypeInput;
