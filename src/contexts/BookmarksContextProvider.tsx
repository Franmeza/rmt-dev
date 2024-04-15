import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type BookMarksContext = {
  bookmarkIds: number[];
  handleToggleBookmark: (id: number) => void;
};

export const BookmarksContext = createContext<BookMarksContext | null>(null);

function BookmarksContextProvider({ children }: { children: React.ReactNode }) {
  const [bookmarkIds, setBookmarksIds] = useLocalStorage<number[]>(
    "bookmarksIds",
    []
  );

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
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
