import { buildQueryOptions, ENDPOINTS } from "@/services/client/appClient";
import { useQuery } from "@tanstack/react-query";

function UseTarget(target) {
  return useQuery(
    buildQueryOptions(
      `${ENDPOINTS.target}/${target}`,
      "target",
      { target },
      { enabled: !!target, cashedTime: 1000 * 60 * 60 * 24 * 30 }
    )
  );
}

export default UseTarget;
