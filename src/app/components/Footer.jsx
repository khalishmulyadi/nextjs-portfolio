import React from 'react';
import Image from "next/image";
import LogoKH from "../../../public/images/Logo-KH-bg-dark.png";

const Footer = () => {
  return (
    <footer className="footer text-white border border-t-[#33353F] border-x-transparent border-b-transparent">
        <div className="container p-4 sm:px-12 flex items-center justify-between">
            <span>
              <Image src={LogoKH} alt="Logo" className="w-10" />
            </span>
            <p className="text-white">All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer