import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Item.create({ title, description });
  return NextResponse.json({message: "Item created successfully"}, {status: 201});
}
