import React from "react";
import { BsFillKeyboardFill } from "react-icons/bs";
import { BsKeyboard } from "react-icons/bs";
import { AiOutlineCrown } from "react-icons/ai";
import { GrIndicator } from "react-icons/gr";
import { AiOutlineSetting } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="flex w-[100%] text-white justify-between px-8 py-4 items-center text-2xl text-white bg-gray-900">
      <div className="left basis-[70%] flex items-center gap-5">
        <BsFillKeyboardFill className="text-3xl" />
        <p>Typing master</p>
        // <BsKeyboard className="hover:text-green-500 hover:cursor-pointer"/>
        // <AiOutlineCrown className="hover:text-green-500 hover:cursor-pointer" />
        // <GrIndicator className="hover:text-green-500 hover:cursor-pointer" />
        // <AiOutlineSetting  className="hover:text-green-500 hover:cursor-pointer" />
      </div>
      // <div className="left flex justify gap-5 justify-between ">
        // <GrNotification className="hover:text-green-500 hover:cursor-pointer" />
        // <CgProfile className="hover:text-green-500 hover:cursor-pointer" />
      // </div>
    </div>
  );
};

export default Header;
