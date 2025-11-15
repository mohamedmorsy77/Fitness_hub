import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import UseImage from "@/hooks/useImage";
function TargetCard({ target }) {
  const targetIdRef = useRef(null);

  const [openImage, setOpenImage] = useState(false);
  const { data: image, isLoading } = UseImage(targetIdRef.current);

  const {
    name,
    difficulty,
    bodyPart,
    equipment,
    category,
    description,
    secondaryMuscles,
    instructions,
  } = target;

  const handleOpenImage = (targetId) => {
    targetIdRef.current = targetId;
    setOpenImage(true);
  };
  return (
    <>
      <Card
        onClick={() => handleOpenImage(target.id)}
        className="bg-linear-to-br from-[#f5f7fa] to-[#c3cfe2] hover:border-[#667eea] duration-300 ease-in rounded-md overflow-hidden hover:-translate-y-1 cursor-pointer   border-2 border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] flex flex-col gap-6 transition"
      >
        <CardHeader>
          <CardTitle className="flex items-center flex-1">
            <p className="font-bold text-blue-900 text-[16px] flex-1">{name}</p>
            <span className="text-white font-semibold rounded-full bg-amber-500 p-2">
              {difficulty}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 justify-between">
          {/* equipment- category - bodyPart */}
          <div className="flex items-center gap-2">
            <span className="p-2 bg-white text-[#555] font-semibold text-sm rounded-full">
              {category}
            </span>
            <span className="p-2 bg-white text-[#555] font-semibold text-sm rounded-full">
              {equipment}
            </span>
            <span className="p-2 bg-white text-[#555] font-semibold text-sm rounded-full">
              {bodyPart}
            </span>
          </div>

          {/* Secondary Miscles */}
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[#555] font-bold text-lg">Secondary Muscles</h3>
            <div className="flex items-center gap-2">
              {secondaryMuscles?.map((secondaryMuscle) => (
                <span
                  key={secondaryMuscle}
                  className="bg-linear-to-br from-[#667eea] to-[#764ba2] rounded-[15px] py-1 px-4 text-white"
                >
                  {secondaryMuscle}
                </span>
              ))}
            </div>
          </div>
          {/* Instruction */}
          <div>
            <h3 className="font-bold text-lg text-[#555]">Instructions</h3>
            <ol className="list-decimal p-0 ml-6">
              {instructions.map((instruction) => (
                <li className="mt-2 text-sm" key={instruction}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
      {/*Drawer to show Exercise Image*/}
      <Dialog open={openImage} onOpenChange={setOpenImage}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[1000px]  flex flex-col md:flex-row  items-center gap-10 ">
          <DialogHeader className="w-full md:w-2/4">
            <DialogTitle className="text-2xl md:text-4xl">{name}</DialogTitle>
            <DialogDescription className="text-gray-500 text-[16px]">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="w-full md:w-2/4">
            {isLoading ? (
              <p>loading...</p>
            ) : (
              <img src={image} alt={`exercise no ${target.id}`} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TargetCard;
