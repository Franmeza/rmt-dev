import getJobItem from "../api-requests/getJobItem";
import useActiveId from "./useActiveId";
import { useQuery } from "@tanstack/react-query";

export default function useJobItem() {
  const id = useActiveId();

  const { data, isLoading } = useQuery(
    ["job-item", id],
    () => (id ? getJobItem(id) : null),

    {
      staleTime: 1000 * 60, //time duration of the cache
      refetchOnWindowFocus: false, // fetch again when going back to the window
      retry: false, //retry fetching if something went wrong
      enabled: Boolean(id), // enable use query depending of an id
      onError: () => {}, // Handle error if there's one
    }
  );
  const jobItemDetails = data?.jobItem;

  return { jobItemDetails, isLoading };
}
