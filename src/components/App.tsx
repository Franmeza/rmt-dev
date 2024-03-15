import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SearchForm from "./SearchForm";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, setJobItems] = useState([]);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
        );
        const data = await res.json();
        setJobItems(data.jobItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchText]);
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
      <Container jobItems={jobItems} />
      <Footer />
    </>
  );
}

export default App;
