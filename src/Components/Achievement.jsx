import React from "react";

const Achievement = ({number, text}) => {
  return (
    <div className=" px-10 py-20 mb-8 rounded-b-full shadow-lg w-64 ml-4">
      <h1 className=" text-center text-5xl font-bold text-blue-400 mb-4">{number}</h1>
      <p className=" text-center font-semibold text-slate-600 ">{text}</p>
    </div>
  );
};

export default Achievement;
