import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%]">
      <div className="flex flex-col justify-center gap-2 ">
        {/* <div className="flex gap-1 rounded justify-center">
          <button className="p-1 rounded bg-gray-400 text-black text-sm">
            tab
          </button>
          <p className="hover:text-green-500">+</p>
          <button className="p-1 rounded bg-gray-400 text-black text-sm">
            enter
          </button>
          <p className="hover:text-green-500">- restart test</p>
        </div>
        <div className="flex gap-1 rounded justify-center ">
          <button className="p-1 rounded bg-gray-400 text-black text-sm">
            esc
          </button>
          <p className="hover:text-green-500">or</p>
          <button className="p-1 rounded bg-gray-400 text-black text-sm">
            ctrl
          </button>
          <p className="hover:text-green-500">+</p>
          <button className="p-1 rounded bg-gray-400 text-black text-sm">
            shift
          </button>
          <p className="hover:text-green-500">+</p>
          <button className="p-1 rounded bg-gray-400 text-black text-sm">
            p
          </button>
          <p className="hover:text-green-500">-</p>
          <p className="hover:text-green-500">command line</p>
        </div> */}
      </div>
      <div className="text-2sm pb-2 text-white w-[95%] m-auto rounded px-4 items-center flex md:flex-row flex-col justify-between bg-gray-900">
        <div className="flex flex-row gap-4 m-2">
          <p className="hover:text-green-500">Contact</p>
          <p className="hover:text-green-500">Support</p>
          <p className="hover:text-green-500">Github</p>
          <p className="hover:text-green-500">Twitter</p>
          <p className="hover:text-green-500">Terms</p>
        </div>
        <div className="flex gap-4">
          <p className="hover:text-green-500">satyam </p>
          <p className="hover:text-green-500">version 1</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
