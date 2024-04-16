import { forwardRef } from "react";
import JobList from "./JobList";
import { createPortal } from "react-dom";
import { useBookmarksContext } from "../contexts/BookmarksContextProvider";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
