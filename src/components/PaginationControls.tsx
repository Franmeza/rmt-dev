import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../utils/types";

type PaginationControlsProps = {
  onChangePage: (direction: PageDirection) => void;
  currentPage: number;
  totalNumberOfPages: number;
};

export default function PaginationControls({
  currentPage,
  onChangePage,
  totalNumberOfPages,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          onClick={() => onChangePage("previous")}
        />
      )}
      {totalNumberOfPages > currentPage && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => onChangePage("next")}
        />
      )}
    </section>
  );
}
type PaginationButtonProps = {
  direction: "next" | "previous";
  onClick: () => void;
  currentPage: number;
};

function PaginationButton({
  direction,
  currentPage,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}

      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
