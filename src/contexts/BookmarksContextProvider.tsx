import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useJobItems } from "../hooks/useJobItems";
import { TJobItem } from "../utils/types";

type BookMarksContext = {
  bookmarkIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkedJobItems: TJobItem[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookMarksContext | null>(null);

export function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkIds, setBookmarksIds] = useLocalStorage<number[]>(
    "bookmarksIds",
    []
  );

  const { jobItems: bookmarkedJobItems, isLoading } = useJobItems(bookmarkIds);
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
        bookmarkedJobItems,
        isLoading,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export const useBookmarksContext = () => {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error(
      "useContext must be used within a BookmarksContextProvider"
    );
  }
  return context;
};
