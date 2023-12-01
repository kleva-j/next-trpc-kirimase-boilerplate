import { generateUser } from "@/lib/helper";
import { NextResponse } from "next/server";

const handler = () => {
  const randomUser = generateUser();

  return NextResponse.json(
    { success: true, message: "User generated", data: randomUser },
    { status: 200 },
  );
};

export { handler as GET };
