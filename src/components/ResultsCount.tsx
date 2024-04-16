import { useJobItemsContext } from "../contexts/JobItemsContextProvider";

export default function ResultsCount() {
  const { totalNumberResults } = useJobItemsContext();
  return (
    <p className="count">
      <span className="u-bold">{totalNumberResults}</span> results
    </p>
  );
}
