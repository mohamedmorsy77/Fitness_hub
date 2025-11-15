import { buildQueryImageOptions, ENDPOINTS } from "@/services/client/appClient";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function UseImage(targetId) {
  return useQuery(
    buildQueryImageOptions(
      `${ENDPOINTS.image}`,
      "targetImage",
      {
        targetId,
      },
      { enabled: !!targetId },
      { resolution: "360", exerciseId: targetId }
    )
  );
}

export default UseImage;
