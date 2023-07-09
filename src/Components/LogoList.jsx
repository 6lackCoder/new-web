import React from "react";
import fedex from "../assets/fedex.png";
import FedEx2 from "../assets/FedEx2.png";
import microsoft from "../assets/microsoft.png";
import google from "../assets/google-1-removebg-preview 1.png";
import amazon from "../assets/amazon.png";
import ola from "../assets/ola.png";
import walmart from '../assets/walmart.png'

const LogoList = () => {
  const imageList1 =   [fedex, google, ola, microsoft]
  const imageList2 = [amazon, walmart,FedEx2];

  return (
    <div className=" w-full h-24 flex flex-col mt-4 gap-4">
      <div className=" flex justify-center gap-4">
        {imageList1.map((image, index) => (
          <div className=" shadow-md p-2" key={index}>
            <img src={image} alt="" className=" w-fit" />
          </div>
        ))}
      </div>
      <div className=" flex justify-center gap-4">
        {imageList2.map((image, index) => (
          <div className=" shadow-md p-2" key={index}>
            <img src={image} alt="" className=" w-fit" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoList;
