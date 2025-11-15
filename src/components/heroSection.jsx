import React from "react";
import banner from "@/assets/FIT0001.jpg";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className="relative  w-full min-h-screen flex items-center justify-center">
      {/* Overlay */}
      <p className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)] z-10"></p>
      <img
        src={banner}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover bg-center"
      />
      <div className="relative z-20 text-white text-center ">
        <h1 className="text-2xl lg:text-6xl font-bold uppercase md:text-4xl">
          build <span className="text-purple-300">your</span> body{" "}
          <span className="text-purple-300">strong</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Ready to change your physique, but can't work out in the gym?
        </p>
        <div>
          <Button className="bg-transparent p-6 rounded-full border-2 border-purple-500 cursor-pointer transition duration-500 hover:bg-purple-500 mt-6 text-[18px]">
            Join With Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
