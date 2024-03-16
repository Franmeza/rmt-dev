import { useEffect, useState } from "react";

import { BASE_API_URL } from "../utils/constants";
import useActiveId from "./useActiveId";
import { TJobItem } from "../utils/types";

export default function useJobItem() {
  const [jobItemDetails, setJobItemDetails] = useState<TJobItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const id = useActiveId();
  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    const fetchJobDetails = async () => {
      const res = await fetch(`${BASE_API_URL}/${id}`);
      const data = await res.json();
      setJobItemDetails(data.jobItem);
      setIsLoading(false);
    };
    fetchJobDetails();
  }, [id]);

  return {
    jobItemDetails,
    isLoading,
  };
}
