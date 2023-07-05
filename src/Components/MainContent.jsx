import React from "react";
import mainPicture from "../assets/mainPicture.png";
import Button from "./Button";


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
      <div></div>
    </>
  );
};

export default MainContent;
