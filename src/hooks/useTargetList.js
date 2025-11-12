import { buildQueryOptions, ENDPOINTS } from "@/services/client/appClient";
import { useQuery } from "@tanstack/react-query";

function UseTargetList() {
  return useQuery(buildQueryOptions(ENDPOINTS.targetList, "targetList"));
}

export default UseTargetList;
