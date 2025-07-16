import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
const Header = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
    } else {
      toast.error("Error");
    }
    setEmail("");
  };
  return (
    <div className="py-5 px-5 md:px-12 lg:px-12 lg-px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="logo" className="sm:w-[130px] w-auto" />

        <button className=" cursor-pointer flex items-center gap-2 font-medium py-1 px-2 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
          <Image src={assets.arrow} alt="arrow" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Stay in the loop with our latest blogs — from coding tutorials and
          design hacks to tech reviews and creative inspiration. There is
          something new every week!
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
          action=""
        >
          <input
            type="email"
            placeholder="enter your email"
            className="pl-4 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            type="submit"
            className="border-1 border-black  py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
