import { createContext, useContext, useState } from "react";
import useDebounce from "../hooks/useDebounce";

type SearchTextContext = {
  searchText: string;
  debouncedValue: string;
  handleSearchText: (newSearchText: string) => void;
};

export const SearchTextContext = createContext<SearchTextContext | null>(null);

export function SearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);

  const handleSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  };
  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        handleSearchText,
        debouncedValue,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}

export const useSearchTextContext = () => {
  const context = useContext(SearchTextContext);

  if (!context) {
    throw new Error(
      "useContext must be used within a SearchTextContextProvider"
    );
  }
  return context;
};
