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

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);
  const { jobItems, isLoading } = useJobItems(debouncedValue);

  const jobItemsSliced = jobItems?.slice(0, 7) || [];
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
      <Container jobItems={jobItemsSliced} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
