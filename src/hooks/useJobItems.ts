import { useEffect, useState } from "react";
import { TJobItems } from "../utils/types";

export default function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<TJobItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
        );
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
    jobItemsSliced,
    isLoading,
  };
}
