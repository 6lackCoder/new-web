import React from "react";

const Mission = ({ children, backgroundColor, textColor }) => {
  return (
    <div style={{backgroundColor: backgroundColor, color: textColor}} className=" flex flex-col h-48 w-[20rem] shadow-md p-4 mb-4 bg-white rounded-lg text-white">
    {children}
    </div>
  );
};

export default Mission;
