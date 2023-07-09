import React from "react";

const NewsLetter = () => {
  return (
    <div className=" bg-[#ff6f2721] text-center w-[65rem] mx-auto h-[20rem] my-4 px-[12rem] py-2 rounded-md">
      <h3 className=" text-[#ff5a05] font-medium tracking-widest my-8">
        NEWSLETTER
      </h3>
      <h1 className=" text-4xl font-medium mb-8">
        We Offer Every Month 20% Off For Our All Subscribers
      </h1>
      <form className=" ring-1 ring-slate-600 p-2 ">
        <input
          type="email"
          placeholder="Email Address"
          className=" w-[75%] py-3 pl-3"
        />
        <button
          type="submit"
          className=" bg-[#ff5a05] w-[23%] py-3 ml-2 text-white"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
