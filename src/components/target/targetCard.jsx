import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function TargetCard() {
  return (
    <Card className="bg-linear-to-br from-[#f5f7fa] to-[#c3cfe2] hover:border-[#667eea] duration-300 ease-in rounded-md overflow-hidden hover:-translate-y-1 cursor-pointer   border-2 border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] bg-[] transition">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>
          <p className="font-bold text-blue-900 text-2xl">45° side bend</p>
        </CardTitle>
        <p>ssss</p>
      </CardHeader>
      <CardContent>sss</CardContent>
      <CardFooter>ssss</CardFooter>
    </Card>
  );
}

export default TargetCard;
