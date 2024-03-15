import { TJobItems } from "../utils/types";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

type ContainerProps = {
  jobItems: TJobItems[];
  isLoading: boolean;
};
export default function Container({ jobItems, isLoading }: ContainerProps) {
  return (
    <div className="container">
      <Sidebar jobItems={jobItems} isLoading={isLoading} />
      <JobItemContent />
    </div>
  );
}
