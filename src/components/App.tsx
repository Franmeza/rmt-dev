import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SearchForm from "./SearchForm";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import useJobItems from "../hooks/useJobItems";
import useDebounce from "../hooks/useDebounce";
import { Toaster } from "react-hot-toast";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);
  const { jobItems, isLoading } = useJobItems(debouncedValue);
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumberResults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberResults / 7;
  const jobItemsSliced =
    jobItems?.slice(currentPage * 7 - 7, currentPage * 7) || [];

  const handleChangePage = (direction: "next" | "previous") => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <>
      <Background />
      <Header>
        <div className="header__top">
          <Logo />
          <BookmarksButton />
        </div>
        <SearchForm setSearchText={setSearchText} searchText={searchText} />
      </Header>
      <Container
        jobItems={jobItemsSliced}
        isLoading={isLoading}
        handleChangePage={handleChangePage}
        currentPage={currentPage}
        totalNumberResults={totalNumberResults}
        totalNumberOfPages={totalNumberOfPages}
      />
      <Footer />
      <Toaster position={"top-right"} />
    </>
  );
}

export default App;
