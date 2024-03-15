import { TJobItems } from "../utils/types";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

type ContainerProps = {
  jobItems: TJobItems[];
};
export default function Container({ jobItems }: ContainerProps) {
  return (
    <div className="container">
      <Sidebar jobItems={jobItems} />
      <JobItemContent />
    </div>
  );
}
