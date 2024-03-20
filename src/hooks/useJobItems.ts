import { useEffect, useState } from "react";
import { TJobItems } from "../utils/types";
import { BASE_API_URL } from "../utils/constants";

export default function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<TJobItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_API_URL}?search=${searchText}`);
        const data = await res.json();
        setIsLoading(false);
        setJobItems(data.jobItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchText]);

  return {
    jobItems,
    isLoading,
  };
}
