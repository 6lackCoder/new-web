import React from "react";
import fedex from "../assets/fedex.png";
import FedEx2 from "../assets/FedEx2.png";
import microsoft from "../assets/microsoft.png";
import google from "../assets/google-1-removebg-preview 1.png";
import amazon from "../assets/amazon.png";
import ola from "../assets/ola.png";

const LogoList = () => {
  return (
    <div className=" w-full h-24 flex flex-col mt-4 gap-4">
      <div className=" flex justify-center gap-4">
        <div className=" shadow-md p-2">
          <img src={fedex} alt="" className=" w-fit" />
        </div>

        <div className=" shadow-md p-2">
          <img src={google} alt=""  className=" w-fit"/>
        </div>
        <div className=" shadow-md p-2">
          <img src={ola} alt=""  className=" w-fit"/>
        </div>

        <div className=" shadow-md p-2">
          <img src={microsoft} alt=""  className=" w-fit"/>
        </div>
      </div>
      <div className=" flex justify-center gap-4">
      <div className=" shadow-md p-2">
          <img src={FedEx2} alt=""  className=" w-fit"/>
        </div>
        <div className=" shadow-md p-2">
          <img src={amazon} alt=""  className=" w-fit"/>
        </div>
      </div>
    </div>
  );
};

export default LogoList;
