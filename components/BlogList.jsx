import { blog_data } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  //   const [blogData, setBlogData] = useState([]);
  //   useEffect(() => {
  //     if (menu === "All") {
  //       setBlogData(blog_data);
  //     } else {
  //       const filteredBlog = blog_data.filter((blog) => blog.category === menu);
  //       setBlogData(filteredBlog);
  //     }
  //   }, [menu]);
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={`${
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={`${
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={`${
            menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }`}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={`${
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }`}
        >
          Lifestyle
        </button>
      </div>
      <div className="p-5 max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
