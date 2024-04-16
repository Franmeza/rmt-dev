import { useJobItemsContext } from "../contexts/JobItemsContextProvider";
import JobList from "./JobList";

function JobListSearch() {
  const { jobItemsSliced, isLoading } = useJobItemsContext();
  return <JobList jobItems={jobItemsSliced} isLoading={isLoading} />;
}

export default JobListSearch;
