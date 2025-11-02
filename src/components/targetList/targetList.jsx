import React from "react";
import TargetListITem from "./targetListITem";

function TargetList() {
  const targetList = [
    "abductors",
    "abs",
    "adductors",
    "biceps",
    "calves",
    "cardiovascular system",
    "delts",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "levator scapulae",
    "pectorals",
    "quads",
    "serratus anterior",
    "spine",
    "traps",
    "triceps",
    "upper back",
  ];
  return (
    <section className="w-[90%] mx-auto py-20">
      <div className="text-center">
        <h3 className="text-3xl text-white font-bold text-shadow-black">
          Comprehensive Muscle Workout System
        </h3>
        <p className="text-white text-xl mt-2">
          Select the target muscle to view all related exercise
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {targetList.map((target, index) => (
          <TargetListITem key={index + 1} target={target} />
        ))}
      </div>
    </section>
  );
}

export default TargetList;
