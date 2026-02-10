"use client";

import { conf } from "@/conf";
import { useQuery } from "@tanstack/react-query";

export const useApiGetHealth = () => {
  return useQuery<{ message: string }>({
    queryKey: ["health"],
    queryFn: () =>
      fetch(`${conf.API_URL}/api/v1/health`).then(async (res) => {
        const data = await res.json();
        console.log("health-data", data);
        return data;
      }),
  });
};
