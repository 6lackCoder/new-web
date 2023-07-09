import React from "react";
import ceoPic from "../assets/ceoPic.png";

const UserReview = () => {
  return (
    <div className=" w-[66rem] mx-auto pt-8">
      <h1 className=" text-center text-5xl font-bold py-4">User's Review</h1>
      <p className=" text-center ">
        Collaborate over project with your team and client optimised <br /> for
        mobile and tablet don't let slow
      </p>
      <div className=" grid grid-cols-2  pt-8">
        <div className=" mt-4">
          <h1 className=" text-2xl font-bold mb-8">What people say about us</h1>
          <div className=" ml-4 mr-[-2rem] bg-white mt-10 shadow-lg shadow-slate-300 ">
            <div className=" w-[16rem] p-4  shadow-lg shadow-slate-200 mb-8">
              <h1 className=" font-extrabold">Davit Millar</h1>
              <p>CEO, PParkview int, Ltd</p>
            </div>

            <p className=" px-4">
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                aperiam accusantium eligendi minus enim autem qui magni ipsum
                placeat? Officiis quod nostrum at necessitatibus vero ipsam ad
                natus consequatur inventore?
              </i>
            </p>
          </div>
        </div>
        <div className=" -z-40">
          <img src={ceoPic} alt="" className=" h-[25rem]" />
        </div>
      </div>
    </div>
  );
};

export default UserReview;
