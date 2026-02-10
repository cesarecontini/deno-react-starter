"use client";

import { conf } from "@/conf";
import { useQuery } from "@tanstack/react-query";

export const useApiGetCountries = () => {
  return useQuery<
    {
      id: string;
      name: string;
      code: string;
      created_at: string;
      updated_at: string;
    }[]
  >({
    queryKey: ["countries"],
    queryFn: () =>
      fetch(`${conf.API_URL}/api/v1/countries`).then(async (res) => {
        const data = await res.json();
        console.log("countries-data", data);
        return data;
      }),
  });
};
