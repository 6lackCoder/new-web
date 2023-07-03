import React from "react";
import Button from "./Button";

const Navigation = () => {
  return (
    <div className=" w-[90%] h-10  flex flex-row justify-around pt-8 mb-10 mx-auto">
      <div>
        <h1 className=" font-extrabold text-xl">SELLZEE</h1>
      </div>
      <ul className=" flex gap-5 text-sm font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Testimonial</li>
        <li>Priceing</li>
      </ul>
      <Button />
    </div>
  );
};

export default Navigation;
