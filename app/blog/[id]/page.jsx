"use client";
import { assets} from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios"

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              alt="logo"
              className="sm:w-[130px] w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImage}
            alt="authorImage"
            width={80}
            height={80}
          />
          <p className="mt-1 pb-2 text-lg max-w-[74opx] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} alt="blogImage" width={720} height={720} />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
         <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}>

         </div>
       
        
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="socail media" />
            <Image src={assets.twitter_icon} width={50} alt="socail media" />
            <Image src={assets.googleplus_icon} width={50} alt="socail media" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
