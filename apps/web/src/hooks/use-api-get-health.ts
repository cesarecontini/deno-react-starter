"use client";

import { useQuery } from "@tanstack/react-query";

export const useApiGetHealth = () => {
  return useQuery<{ message: string }>({
    queryKey: ["health"],
    queryFn: () =>
      fetch("/api/v1/health").then(async (res) => {
        const data = await res.json();
        console.log("health-data", data);
        return data;
      }),
  });
};
