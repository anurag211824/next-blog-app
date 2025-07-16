import { NextResponse } from "next/server";
import { connectDb } from "@/lib/config/db.js";
import { writeFile } from "fs/promises";
import Blog from "@/lib/models/Blog.js";
import fs from "fs";
const LoadDB = async () => {
  await connectDb();
};
LoadDB();

//Api end point to get all blog
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await Blog.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await Blog.find({});
    return NextResponse.json({ blogs });
  }
}
//Api end point for uploading the blog
export async function POST(request) {
  const formData = await request.formData();
  const timeStamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timeStamp}_${image.name}`;
  await writeFile(path, buffer);
  const imageURL = `/${timeStamp}_${image.name}`;
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: imageURL,
    authorImage: `${formData.get("authorImg")}`,
  };
  await Blog.create(blogData);
  console.log("blogSaved");

  return NextResponse.json({ success: true, message: "blog Added" });
}
// Api endpoints to delete a Blog
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing blog ID" }, { status: 400 });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Delete image if exists
    if (blog.image) {
      try {
      fs.unlink(`./public${blog.image}`);
      } catch (err) {
        console.warn("Image not found or already deleted:", err.message);
        // You may choose to continue or return a 404
      }
    }

    // Delete blog document
    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Blog Deleted" }, { status: 200 });

  } catch (error) {
    console.error("DELETE handler error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}