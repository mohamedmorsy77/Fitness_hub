import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SearchMuscles from "./searchMuscels";
import UseTargetList from "@/hooks/useTargetList";
import React, { useContext, useEffect, useState } from "react";
import { TargetContext } from "@/context/targetContextProvider";

function TargetList() {
  const { setSelectedTarget, setShowTargetCard, targetRef, selectedTarget } =
    useContext(TargetContext);
  const { data: targetList, error, isError, isLoading } = UseTargetList();

  const [filteredData, setFilteredData] = useState(targetList || []);
  const filterMuscles = (query) => {
    const filtered =
      query && targetList
        ? targetList.filter((muscle) =>
            muscle.toLowerCase().includes(query.toLowerCase())
          )
        : targetList;
    setFilteredData(filtered);
  };
  useEffect(() => {
    if (targetList) {
      setFilteredData(targetList);
    }
  }, [targetList]);

  if (isLoading) {
    return (
      <section className="w-[90%] mx-auto flex flex-col gap-10 py-20">
        <p className="text-white text-center text-lg p-4">Loading muscles...</p>
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
  const handleTarget = (target) => {
    setSelectedTarget((prev) => {
      const isSame = prev === target;
      if (isSame) {
        setShowTargetCard((prev) => !prev);
      } else {
        setShowTargetCard(true);
        if (targetRef.current) {
          setTimeout(() => {
            targetRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }

      return target;
    });
  };
  return (
    <section className="py-8">
      <div className="w-[90%] mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl text-white font-bold text-shadow-black">
            Comprehensive Muscle Workout System
          </h3>
          <p className="text-white  text-[18px] md:text-xl mt-2">
            Select the target muscle to view all related exercise
          </p>
        </div>
        <SearchMuscles filterMuscles={filterMuscles} />

        <ScrollArea className="w-full mt-10   whitespace-nowrap">
          <div className="flex gap-4 min-w-max p-2 overflow-x-auto scroll-smooth">
            {filteredData.length ? (
              filteredData.map((target, index) => {
               
                const isActive = selectedTarget
                  ? selectedTarget === target
                  : false;
                
                return (
                  <div
                    onClick={() => handleTarget(target)}
                    key={index + 1}
                    className={`
          relative flex items-center justify-center
          rounded-md p-4 shadow cursor-pointer bg-white
          transition duration-300 hover:-translate-y-2
          after:absolute after:left-[50%] after:top-0 after:h-1 after:w-0
          after:bg-purple-700 after:transition-all after:duration-300
          hover:after:w-full hover:after:left-0
          min-w-[200px]  
          shrink-0  
          ${
            isActive
              ? "bg-linear-to-br from-[#b3ccef] to-[#3e69af] text-white"
              : "bg-white"
          }
        `}
                  >
                    <h4 className="font-semibold text-xl">{target}</h4>
                  </div>
                );
              })
            ) : (
              <p className="text-white text-center text-lg p-4">
                No muscles found
              </p>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}

export default TargetList;
