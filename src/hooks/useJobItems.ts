import { useQuery } from "@tanstack/react-query";
import getJobItemsList from "../api-requests/getJobItemsList";

export default function useJobItems(searchText: string) {
  // const [jobItems, setJobItems] = useState<TJobItems[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!searchText) return;

  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch(`${BASE_API_URL}?search=${searchText}`);
  //       const data = await res.json();
  //       setIsLoading(false);
  //       setJobItems(data.jobItems);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [searchText]);

  const { data, isInitialLoading } = useQuery(
    ["job-items", searchText],
    () => getJobItemsList(searchText),

    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    jobItems: data?.jobItems,
    isLoading: isInitialLoading,
  };
}
