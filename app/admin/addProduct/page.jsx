"use client";
import { assets } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios"
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    author: "Anurag",
    authorImg: "/author_img.png",
  });
  useEffect(() => {
  toast.info("✅ Toast test working");
}, []);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("authorImg", data.authorImg);
    formData.append("author", data.author);
    formData.append('image',image)
      // ✅ Use this to see the actual content of FormData
  console.log("🔍 FormData contents:");
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
    
    const response = await axios.post("/api/blog",formData)
    if(response.data.success === true){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.error)
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="uploadArea"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4 ">Blog Title</p>
        <input
          name="title"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
          onChange={(event) => onChangeHandler(event)}
          value={data.title}
        />

        <p className="text-xl mt-4 ">Blog Description</p>
        <textarea
          name="description"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type content here"
          required
          rows={6}
          onChange={(event) => onChangeHandler(event)}
          value={data.description}
        />
        <p>Blog Category</p>
        <select
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
          name="category"
          onChange={(event) => onChangeHandler(event)}
          value={data.category}
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="LifeStyle">LifeStyle</option>
        </select>
        <br></br>
        <button type="submit" className="mt-8 w-48 h-12 bg-black text-white">
          Add
        </button>
      </form>
    </>
  );
};

export default page;
