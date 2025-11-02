import { BicepsFlexed, Menu } from "lucide-react";
import React from "react";

function Header() {
  return (
    <section className="z-50 fixed top-0 left-0 right-0 py-6  backdrop-blur-2xl shadow ">
      <div className="w-[90%] mx-auto  flex items-center justify-between   text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BicepsFlexed />
          <h1 className="font-bold text-xl">Fitness Hub</h1>
        </div>
        <Menu className="cursor-pointer" />
        {/* Nav */}
      </div>
    </section>
  );
}

export default Header;
