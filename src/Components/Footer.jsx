import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-blue-800 flex justify-around text-white p-28 mb-4">
      <div>
        <h1 className=" text-white text-2xl font-bold">SELLZEE</h1>
        <div className=" grid grid-flow-col gap-2">
          <div className=" h-8 w-8 bg-slate-500 rounded-full"></div>
          <div className=" h-8 w-8 bg-slate-500 rounded-full"></div>
          <div className=" h-8 w-8 bg-slate-500 rounded-full"></div>
          <div className=" h-8 w-8 bg-slate-500 rounded-full"></div>
        </div>
      </div>
      <div>
        <h1 className=" text-xl font-medium mb-4">SHORT LINKS</h1>
        <ul className=" grid gap-2">
          <li>Home</li>
          <li>Service</li>
          <li>Screenshots</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div>
        <h1 className=" text-xl font-medium mb-4">HELP LINKS</h1>
        <ul className=" grid gap-2">
          <li>How to Download</li>
          <li>How it works</li>
          <li>Video tutorial</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <h1 className=" text-xl font-medium mb-4">SHORT LINKS</h1>
        <ul className=" grid gap-2">
          <li>Google Play Store</li>
          <li>Apple Play Store</li>
          <li>Download Directly</li> 
        </ul>
      </div>
    </footer>
  );
}

export default Footer