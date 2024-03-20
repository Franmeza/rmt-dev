import getJobItem from "../api-requests/getJobItem";
import useActiveId from "./useActiveId";
import { useQuery } from "@tanstack/react-query";

export default function useJobItem() {
  const id = useActiveId();

  const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? getJobItem(id) : null),

    {
      staleTime: 1000 * 60 * 60, //time duration of the cache
      refetchOnWindowFocus: false, // fetch again when going back to the window
      retry: false, //retry fetching if something went wrong
      enabled: Boolean(id), // run the query only if there's an id
      onError: (error) => {
        // Handle error if there's one
        console.log(error);
      },
    }
  );
  const jobItemDetails = data?.jobItem;
  const isLoading = isInitialLoading;
  return { jobItemDetails, isLoading };
}
