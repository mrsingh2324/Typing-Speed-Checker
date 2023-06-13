import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%]">
      <div className="flex flex-col justify-center gap-2 ">
       
      </div>
      <div className="text-2sm pb-2 text-white w-[95%] m-auto rounded px-4 items-center flex md:flex-row flex-col justify-between bg-gray-900">
        <div className="flex flex-row gap-4 m-2">
          <a href="https://github.com/mrsingh2324" className="hover:text-green-500">Github</a>
          {/* <a href="" className="hover:text-green-500">Support</a> */}
          <a href="https://wa.me/+919758051994" className="hover:text-green-500">Contact</a>
          <a href="https://twitter.com/mrsatyamsingh" className="hover:text-green-500">Twitter</a>
          {/* <a href="" className="hover:text-green-500">Terms</a> */}
        </div>
        <div className="flex gap-4">
          <a href="" className="hover:text-green-500">by satyam </a>
          {/* <a href="" className="hover:text-green-500">version 1</a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
