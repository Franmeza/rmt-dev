import { TJobItems } from "../utils/types";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SideBarProps = {
  jobItems: TJobItems[];
  isLoading: boolean;
  handleChangePage: (direction: "next" | "previous") => void;
  currentPage: number;
  totalNumberResults: number;
  totalNumberOfPages: number;
};

export default function Sidebar({
  jobItems,
  isLoading,
  handleChangePage,
  currentPage,
  totalNumberResults,
  totalNumberOfPages,
}: SideBarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount resultsCount={totalNumberResults} />
        <SortingControls />
      </div>
      <JobList jobItems={jobItems} isLoading={isLoading} />
      <PaginationControls
        onChangePage={handleChangePage}
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
      />
    </div>
  );
}
