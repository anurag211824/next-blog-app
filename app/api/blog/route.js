import { NextResponse } from "next/server";
import { connectDb } from "@/lib/config/db.js";
import { writeFile } from "fs/promises";
import Blog from "@/lib/models/Blog.js";
const LoadDB = async ()=>{
    await connectDb()
}
LoadDB()

export async function POST(request){
    const formData =  await request.formData()
    const timeStamp = Date.now()
    const image = formData.get("image")
    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timeStamp}_${image.name}`
    await writeFile(path,buffer)
    const imageURL = `/${timeStamp}_${image.name}`
    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get("description")}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:imageURL,
        authorImage:`${formData.get('authorImg')}`
    }
    await Blog.create(blogData)
    console.log("blogSaved");
    
    return NextResponse.json({success:true,message:"blog Added"})
    
}