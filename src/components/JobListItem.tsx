import useActiveId from "../hooks/useActiveId";
import { TJobItems } from "../utils/types";
import BookmarkIcon from "./BookmarkIcon";

type JobListItemProps = {
  jobItem: TJobItems;
};

export default function JobListItem({ jobItem }: JobListItemProps) {
  const activeId = useActiveId();

  return (
    <li
      className={`job-item ${
        activeId === jobItem.id ? "job-item--active" : ""
      }`}
    >
      <a href={`#${jobItem.id}`} className="job-item__link">
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon id={jobItem.id} />
          <time className="job-item__time">{jobItem.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
