import React, { useContext } from "react";
import TargetCard from "./targetCard";

import UseTarget from "@/hooks/useTarget";
import { TargetContext } from "@/context/targetContextProvider";

function Target() {
  const { showTargetCard, selectedTarget, targetRef } =
    useContext(TargetContext);
  const {
    data: targetData,
    isLoading,
    isError,
    error,
  } = UseTarget(selectedTarget);

  if (isLoading) {
    return (
      <section className="w-[90%] mx-auto flex flex-col gap-10 py-20">
        <p className="text-white text-center text-lg p-4">Loading targets...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="w-[90%] mx-auto flex flex-col gap-10 py-20">
        <p className="text-white text-center text-lg p-4">
          Error loading muscles: {error.message}
        </p>
      </section>
    );
  }

  return (
    <section className="py-6">
      <section className="w-[90%] mx-auto flex flex-col gap-20">
        {showTargetCard && (
          <div ref={targetRef} className="rounded-md p-4 bg-white shadow">
            <div className="p-4 border-b-2 border-b-[#667eea] flex items-center sm:flex-row flex-col  gap-3  justify-between">
              <h2 className="font-semibold text-blue-950 text-2xl">
                Abs Muscle exercises
              </h2>
              <p className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-2 font-semibold rounded-full text-white ">
                10 exercise
              </p>
            </div>
            <div className="mt-10 grid  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {/*Reusable Component */}
              {targetData.map((target) => (
                <TargetCard
                  key={target.id}
                  selectedTarget={selectedTarget}
                  target={target}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

export default Target;
