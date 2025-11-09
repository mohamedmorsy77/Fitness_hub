import React, { useEffect, useRef, useState } from "react";
import TargetListITem from "./targetListITem";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import SearchMuscels from "./searchMuscels";

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
  const [filteredData, setFilterdData] = useState(targetList);
  const filterMuscles = (query) => {
    const filtered = query
      ? targetList.filter((muscle) =>
          muscle.toLowerCase().includes(query.toLowerCase())
        )
      : targetList;
    setFilterdData(filtered);
  };

  return (
    <section className="w-[90%] mx-auto flex flex-col gap-10 py-20">
      <div className="text-center">
        <h3 className="text-3xl text-white font-bold text-shadow-black">
          Comprehensive Muscle Workout System
        </h3>
        <p className="text-white text-xl mt-2">
          Select the target muscle to view all related exercise
        </p>
      </div>
      <SearchMuscels filterMuscles={filterMuscles} />

      <ScrollArea className="w-full mt-10   whitespace-nowrap">
        <div className="flex gap-4 min-w-max p-2 overflow-x-auto scroll-smooth">
          {filteredData.length ? (
            filteredData.map((target, index) => (
              <div
                key={index}
                className="
          relative flex items-center justify-center
          rounded-md p-4 shadow cursor-pointer bg-white
          transition duration-300 hover:-translate-y-2
          after:absolute after:left-[50%] after:top-0 after:h-1 after:w-0
          after:bg-purple-700 after:transition-all after:duration-300
          hover:after:w-full hover:after:left-0
          min-w-[200px]  
          shrink-0  
        "
              >
                <h4 className="font-semibold text-xl">{target}</h4>
              </div>
            ))
          ) : (
            <p className="text-white text-center text-lg p-4">
              No muscles found
            </p>
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default TargetList;
