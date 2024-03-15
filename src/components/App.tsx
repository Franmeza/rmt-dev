import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SearchForm from "./SearchForm";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import useJobItems from "../hooks/useJobItems";

function App() {
  const [searchText, setSearchText] = useState("");
  const { jobItems, isLoading } = useJobItems(searchText);

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
      <Container jobItems={jobItems} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
