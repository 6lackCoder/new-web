import React from "react";
import Button from "./Button";
import tablet from "../assets/tab.png";

const HeadContent = () => {
  return (
    <div className=" h-[100%] flex justify-between mx-auto py-10 px-64 ">
      <div className=" w-[32%] h-[25rem] bg-transparent flex flex-col justify-center items-start gap-3 text-white">
        <p className=" font-bold tracking-widest">INSPIRATION TECHNOLOGY.</p>
        <h1 className=" text-4xl font-bold">Run faster.</h1>
        <h1 className=" text-4xl font-semibold">Cost less and never breaks.</h1>
        <div className=" w-[80%] h-[1px] bg-white mx-2"> </div>
        <p className=" text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima deleniti iure dicta ducimus maiores, voluptas aliquam,
          molestiae aut facere fugit natus ipsum pariatur nisi ullam magni
          sapiente, aliquid laudantium.
        </p>
        <div className=" flex gap-2">
          <Button children='Get started'/>
          <button className=" w-32  h-10 font-medium text-xm text-white ring-1 ring-slate-500">Free Trial</button>
        </div>
      </div>
      <div className="w-[45%] h-[20rem] mt-10">
        <img src={tablet} alt="" />
      </div>
    </div>
  );
};

export default HeadContent;
