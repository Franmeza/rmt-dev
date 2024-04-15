import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext, useEffect } from "react";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";

type BookMarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookMarkIconProps) {
  const { handleToggleBookmark, bookmarkIds } = useContext(BookmarksContext);

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={bookmarkIds.includes(id) ? "filled" : ""}
      />
    </button>
  );
}
