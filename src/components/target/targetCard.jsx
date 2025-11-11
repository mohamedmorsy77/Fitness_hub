import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function TargetCard() {
  return (
    <Card className="bg-linear-to-br from-[#f5f7fa] to-[#c3cfe2] hover:border-[#667eea] duration-300 ease-in rounded-md overflow-hidden hover:-translate-y-1 cursor-pointer   border-2 border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] flex flex-col gap-6 transition">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p className="font-bold text-blue-900 text-2xl">45° side bend</p>
          <span className="text-white font-semibold rounded-full bg-amber-500 p-2">
            Beginer
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 flex-1">
        {/* equipment- category - bodyPart */}
        <div className="flex items-center gap-4">
          <span className="p-2 bg-white text-[#555] font-semibold text-sm rounded-full">
            Body Weight
          </span>
          <span className="p-2 bg-white text-[#555] font-semibold text-sm rounded-full">
            Strenght
          </span>
          <span className="p-2 bg-white text-[#555] font-semibold text-sm rounded-full">
            Weast
          </span>
        </div>
        {/* Description */}
        <div className="bg-[#ffffff] text-[#555] py-2 px-4 rounded-md ">
          my name is mohamed morsy, i am a front end developer at astra tech
        </div>
        {/* Secondary Miscles */}
        <div className="flex flex-col gap-4 ">
          <h3 className="text-[#555] font-bold text-lg">Secondary Muscles</h3>
          <div className="flex items-center gap-4">
            <span className="bg-linear-to-br from-[#667eea] to-[#764ba2] rounded-[15px] py-2 px-4 text-white">
              qwe
            </span>
            <span className="bg-linear-to-br from-[#667eea] to-[#764ba2] rounded-[15px] py-2 px-4 text-white ">
              qwe
            </span>
            <span className="bg-linear-to-br from-[#667eea] to-[#764ba2] rounded-[15px] py-2 px-4 text-white">
              qwe
            </span>
          </div>
        </div>
        {/* Instruction */}
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#667eea] text-white flex items-center justify-between p-2  cursor-pointer rounded-md hover:bg-[#764ba2] text-xl transition duration-300 ease-in-out">
                Excersice Instructions
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 mt-4 bg-white rounded-md py-2 px-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}

export default TargetCard;
