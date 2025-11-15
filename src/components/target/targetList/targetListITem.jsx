import React from "react";

function TargetListITem({ target }) {
  return (
    <div className="flex relative items-center justify-center rounded-md after:content-[''] after:left-0 after:absolute after:w-0 hover:after:w-full after:transition after:duration-300  after:bg-purple-700 after:h-1 after:top-0  p-4 transition duration-300 hover:-translate-y-2 cursor-pointer bg-white shadow">
      <h4 className="font-semibold text-xl">{target}</h4>

      {/* <p className="absolute w-full h-1 top-0 bg-purple-700"></p> */}
    </div>
  );
}

export default TargetListITem;
