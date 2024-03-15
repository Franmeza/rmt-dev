import { TJobItems } from "../utils/types";
import JobListItem from "./JobListItem";

type JobListProps = {
  jobItems: TJobItems[];
};
export function JobList({ jobItems }: JobListProps) {
  return (
    <ul className="job-list">
      {jobItems.map((jobItem) => (
        <JobListItem key={jobItem.id} jobItem={jobItem} />
      ))}
    </ul>
  );
}

export default JobList;
