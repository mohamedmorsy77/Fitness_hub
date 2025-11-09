import React from "react";
import TargetCard from "./targetCard";

function Target() {
  return (
    <section className="py-6">
      <section className="w-[90%] mx-auto rounded-md p-4 bg-white shadow">
        <div className="p-4 border-b-2 border-b-[#667eea] flex items-center justify-between">
          <h2 className="font-semibold text-blue-950 text-2xl">
            Abs Muscle exercises
          </h2>
          <p className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-2 font-semibold rounded-full text-white ">
            10 exercise
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/*Reusable Component */}
          <TargetCard />
        </div>
      </section>
    </section>
  );
}

export default Target;
