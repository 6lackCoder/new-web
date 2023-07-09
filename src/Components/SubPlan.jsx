import React from "react";

const SubPlan = ({children}) => {
  return (
    <div className=" ring-1 ring-blue-100 w-[20rem] mb-8 px-[2rem] py-4 bg-white rounded-md">
      <h2 className=" text-2xl text-center font-bold mt-[2rem]">Standard</h2>
     {children}
      <p className=" font-medium mb-2">256 GB SSD STORE</p>
      <p className=" font-medium mb-2">FULL UI KIT </p>
      <p className=" font-medium mb-2">PUBLIC API</p>
      <p className=" font-medium mb-2">FULL UI PACK DOWNLOAD</p>
      <p className=" font-medium mb-2">24/7 SUPPORT</p>

      <button className=" bg-[#ff5a05] text-white font-semibold my-8 py-2 px-20 rounded-md">Install Pack</button>
    </div>
  );
};

export default SubPlan;
