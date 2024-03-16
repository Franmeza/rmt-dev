type ResultsCountProps = {
  resultsCount: number;
};

export default function ResultsCount({ resultsCount }: ResultsCountProps) {
  return <p className="count">{resultsCount} results</p>;
}
