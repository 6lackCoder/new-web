import React from "react";
import mainPicture from "../assets/mainPicture.png";
import Button from "./Button";
import Achievement from "./Achievement";
import Mission from "./Mission";
import UserReview from "./UserReview";
import SubPlan from "./SubPlan";
import NewsLetter from "./NewsLetter";

const MainContent = () => {
  return (
    <>
      <div className=" grid grid-flow-col grid-cols-2 mt-20">
        <section>
          <img
            src={mainPicture}
            alt=""
            srcset=""
            className="h-[26rem] w-[40rem]"
          />
        </section>
        <section className=" w-[60%] ml-12">
          <h4 className="text-red-400 font-bold py-4">
            LOREM IPSUM DOLOR SIT AME
          </h4>
          <h1 className=" text-4xl font-extrabold pb-4">
            Simple Solution For Complex Connections
          </h1>
          <p className=" py-4 font-light text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aut
            veniam aliquam assumenda, blanditiis est error ipsa asperiores
            distinctio facere quas?
          </p>
          <div className=" flex gap-4 font-bold py-4">
            <h3>High Analysis</h3>
            <h3>Certified Institue</h3>
          </div>
          <Button children="Learn more" />
        </section>
      </div>
      <div className=" flex justify-center items-center">
        <Achievement number="50+" text="Happy Client" />
        <Achievement number="550+" text="Projects Completed" />
        <Achievement number="250" text="Dedicated Members" />
        <Achievement number="30+" text="Awards Won" />
      </div>
      <div className=" flex w-[65rem] flex-wrap justify-center mx-auto gap-4 p-4  bg-yellow-50">
        <Mission backgroundColor="transparent" textColor="black">
          <h3 className=" text-orange-600 font-semibold">
            YOUR VISION, OUR FUTURE
          </h3>
          <h2 className=" font-bold text-2xl ">
            Committed to poeple, Committed
          </h2>
          <p className=" text-sm text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            est?
          </p>
        </Mission>
        <Mission backgroundColor="blue" textColor="white">
          <h3 className=" mt-16 text-lg font-semibold">Creative Ideas</h3>
          <p className=" text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
            saepe exercitationem tenetur
          </p>
        </Mission>

        <Mission textColor="black">
          <h3 className=" mt-16 text-lg font-semibold">Beautiful Blogs</h3>
          <p className=" text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
            saepe exercitationem tenetur
          </p>
        </Mission>

        <Mission textColor="black">
          <h3 className=" mt-16 text-lg font-semibold">User Friendly</h3>
          <p className=" text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
            saepe exercitationem tenetur
          </p>
        </Mission>

        <Mission textColor="black">
          <h3 className=" mt-16 text-lg font-semibold">Perfect Showcase</h3>
          <p className=" text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
            saepe exercitationem tenetur
          </p>
        </Mission>

        <Mission textColor="black">
          <h3 className=" mt-16 text-lg font-semibold">Easy to Use</h3>
          <p className=" text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
            saepe exercitationem tenetur
          </p>
        </Mission>
      </div>
      <div>
        <UserReview />
      </div>

      <div className=" bg-blue-100 w-[65rem] mx-auto h-[20rem] mt-10">
        <h1 className=" text-center font-bold pt-8">
          Without Extra Charges Choose
          <br /> Your Best Plan
        </h1>
        <div className=" mx-auto p-2 bg-white w-[11.2rem] flex gap-4 rounded-sm mt-4">
          <button className=" bg-[#ff5a05] text-red-100 px-3 py-1 rounded-md">
            Monthly
          </button>
          <button className=" bg-red-100 text-[#ff5a05] px-3 py-1 rounded-md">
            Yearly
          </button>
        </div>
      </div>
      <div className=" flex justify-center z-50 mt-[-8.5rem] gap-8">
        <SubPlan>
          <h1 className=" text-7xl text-center text-blue-700 font-bold my-4">
            $29
          </h1>
          <p className=" font-bold mb-2 text-center">monthly pack</p>
        </SubPlan>
        <SubPlan>
          <h1 className=" text-7xl text-center text-blue-700 font-bold my-4">
            $39
          </h1>
          <p className=" font-bold mb-2 text-center">yearly pack</p>
        </SubPlan>
      </div>
      <NewsLetter />
    </>
  );
};

export default MainContent;
