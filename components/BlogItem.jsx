import { assets} from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const BlogItem = ({title,description,category,image,id}) => {
  return (
    <div className="w-full bg-white border  border-black hover:shadow-[-7px_7px_0px_#000000]">
        <Link href={`/blogs/${id}`}>
         <Image
        src={image}
        alt="image"
        width={400}
        height={400}
        className="border-b border-black w-full"
      /></Link>
     
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">{description}</p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font- font-semibold text-center">
            Read More <Image src={assets.arrow} className="ml-3" width={12} alt="arrow"/>
        </Link>
      </div>
    </div>

  );
};

export default BlogItem;
