import { useQueries } from "@tanstack/react-query";
import getJobItem from "../api-requests/getJobItem";
import { handleErrors } from "../utils/handleErrors";
import { TJobItem } from "../utils/types";

export const useJobItems = (ids: number[]) => {
  //multiple network requests in parallel
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => getJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleErrors,
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobItem) => jobItem !== undefined) as TJobItem[];

  const isLoading = results.some((result) => result.isLoading);
  return { jobItems, isLoading };
};
