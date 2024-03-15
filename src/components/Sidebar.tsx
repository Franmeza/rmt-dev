import { TJobItems } from "../utils/types";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SideBarProps = {
  jobItems: TJobItems[];
};

export default function Sidebar({ jobItems }: SideBarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount />
        <SortingControls />
      </div>
      <JobList jobItems={jobItems} />
      <PaginationControls />
    </div>
  );
}
