import { createContext, useContext, useMemo, useState } from "react";
import useSearchQuery from "../hooks/useSearchQuery";
import { PageDirection, TJobItems, TSortBy } from "../utils/types";
import { RESULTS_PER_PAGE } from "../utils/constants";
import { useSearchTextContext } from "./SearchTextContextProvider";

type JobItemsContext = {
  jobItems: TJobItems[] | undefined;
  isLoading: boolean;
  totalNumberResults: number;
  totalNumberOfPages: number;
  currentPage: number;
  jobItemsSliced: TJobItems[];
  sortBy: string;
  handleSorting: (sortBy: TSortBy) => void;
  handleChangePage: (direction: PageDirection) => void;
};

export const JobItemsContext = createContext<JobItemsContext | null>(null);

export function JobItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // dependency on other context
  const { debouncedValue } = useSearchTextContext();

  // states
  const { jobItems, isLoading } = useSearchQuery(debouncedValue);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortBy>("relevant");

  //derived / computed states
  const totalNumberResults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberResults / 7;

  const sortedJobItems = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [sortBy, jobItems]
  );

  const jobItemsSliced = useMemo(
    () =>
      sortedJobItems?.slice(
        currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
      ),
    [currentPage, sortedJobItems]
  );

  const handleSorting = (sortBy: TSortBy) => {
    setSortBy(sortBy);
    setCurrentPage(1);
  };

  const handleChangePage = (direction: PageDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <JobItemsContext.Provider
      value={{
        jobItems,
        jobItemsSliced,
        isLoading,
        totalNumberResults,
        totalNumberOfPages,
        currentPage,
        sortBy,
        handleSorting,
        handleChangePage,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}

export const useJobItemsContext = () => {
  const context = useContext(JobItemsContext);

  if (!context) {
    throw new Error("useContext must be used within a JobItemsContextProvider");
  }
  return context;
};
