"use client";

import { assets, blog_data } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  // Binary Search Function
  const fetchBlogData = async () => {
    const { id } = await params;
    const targetId = Number(id);
    let left = 0;
    const sortedData = [...blog_data].sort((a, b) => a.id - b.id);
    let right = sortedData.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midId = sortedData[mid].id;

      if (midId === targetId) {
        setData(sortedData[mid]);
        break;
      } else if (midId < targetId) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
        <Link href="/"><Image src={assets.logo} alt="logo" className="sm:w-[130px] w-auto" /></Link>
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
            src={data.author_img}
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
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Awareness
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of your current habits, daily routines, and mental
          patterns. Self-reflection allows you to identify what’s working and
          what isn’t. Take time each day or week to journal your actions,
          emotions, and choices. This awareness is the foundation of personal
          growth.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Setting Clear and Achievable Goals
        </h3>
        <p className="my-3">
          Goal setting is essential for progress. Define what you want to
          improve—whether it's physical health, time management, or emotional
          well-being. Set SMART goals (Specific, Measurable, Achievable,
          Relevant, Time-bound) and break them into smaller milestones. The
          clarity of your goals will guide your daily actions and keep you
          motivated.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Taking Consistent Action and Tracking Progress
        </h3>
        <p className="my-3">
          Change happens through consistent effort. Develop routines and habits
          that align with your goals. Use planners, habit trackers, or digital
          tools to monitor your progress. Celebrate small wins and learn from
          setbacks. Remember, lifestyle management is not about perfection but
          about persistence and improvement over time.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Managing your lifestyle is a journey that requires commitment,
          patience, and flexibility. It starts with knowing yourself, setting
          intentions, and showing up every day with purpose. As you grow and
          evolve, so will your lifestyle. Stay mindful, stay disciplined, and
          never stop striving to become the best version of yourself.
        </p>
        <div className="my-24">
            <p className="text-black font font-semibold my-4">share this article on social media</p>
            <div className="flex">
                <Image src={assets.facebook_icon} width={50} alt="socail media" />
                  <Image src={assets.twitter_icon} width={50} alt="socail media" />
                    <Image src={assets.googleplus_icon} width={50} alt="socail media" />
            </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <></>
  );
};

export default Page;
