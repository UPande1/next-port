
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          width={50}
          height={50}
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="logo"
          className="rounded-lg"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;