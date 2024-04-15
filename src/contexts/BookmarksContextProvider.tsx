import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BookmarksContext = createContext(null);

function BookmarksContextProvider({ children }) {
  const [bookmarkIds, setBookmarksIds] = useLocalStorage("bookmarksIds", []);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarksIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarksIds((prev) => [...prev, id]);
    }
  };
  return (
    <BookmarksContext.Provider
      value={{
        bookmarkIds,
        setBookmarksIds,
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
