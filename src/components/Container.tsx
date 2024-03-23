import { TJobItems } from "../utils/types";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

type ContainerProps = {
  jobItems: TJobItems[];
  isLoading: boolean;
  handleChangePage: (direction: "next" | "previous") => void;
  currentPage: number;
  totalNumberResults: number;
  totalNumberOfPages: number;
};
export default function Container({
  jobItems,
  isLoading,
  handleChangePage,
  currentPage,
  totalNumberResults,
  totalNumberOfPages,
}: ContainerProps) {
  return (
    <div className="container">
      <Sidebar
        jobItems={jobItems}
        isLoading={isLoading}
        handleChangePage={handleChangePage}
        currentPage={currentPage}
        totalNumberResults={totalNumberResults}
        totalNumberOfPages={totalNumberOfPages}
      />
      <JobItemContent />
    </div>
  );
}
