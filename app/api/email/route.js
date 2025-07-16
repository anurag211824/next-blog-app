import { connectDb } from "@/lib/config/db";
import Email from "@/lib/models/Email";
import { NextResponse } from "next/server";
const LoadDB = async () => {
  await connectDb();
};
LoadDB();

//Api end points for email subscription
export const dynamic = "force-dynamic"; // This will ensure the API route is always fresh
export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await Email.create(emailData)
  return NextResponse.json({success:true,msg:"Email subscribed"})
}

//API end points for getting all the email from the databse
export async function GET(request){
    const emails  = await Email.find({});
    return NextResponse.json({emails});
}
// API end points for deleting a particular subscribed email
export async function DELETE(request){
    const Id = await request.nextUrl.searchParams.get("id");
    await Email.findByIdAndDelete(Id);
    return NextResponse.json({success:true,msg:"email deleted"})

}

