import { useSearchTextContext } from "../contexts/SearchTextContextProvider";

export default function SearchForm() {
  const { handleSearchText, searchText } = useSearchTextContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        onChange={(e) => handleSearchText(e.target.value)}
        value={searchText}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
