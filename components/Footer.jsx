import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-block py-5 items-center bg-black">
      <Image src={assets.logo_light} alt="footerLogo" width={120} />
      <p className="text-sm text-white">
        All rights reserved. Copyright @blogger
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="facebook" width={40} />
        <Image src={assets.twitter_icon} alt="facebook" width={40} />
        <Image src={assets.googleplus_icon} alt="facebook" width={40} />
      </div>
    </div>
  );
};

export default Footer;
