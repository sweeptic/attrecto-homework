import usePagination from "hooks/usePagination";
import { getSearchActualPage, getSearchCount, getSearchTotalPage } from "store/reducers/moviesReducer";
import { useAppSelector } from "store/store";

interface IPagination {
  enteredFilter: string;
}

const Pagination = (enteredFilter: IPagination) => {
  const count = useAppSelector((state) => getSearchCount(state));
  const actual = useAppSelector((state) => getSearchActualPage(state));
  const total = useAppSelector((state) => getSearchTotalPage(state));
  const { next, prev } = usePagination(enteredFilter);

  function onPrevHandler() {
    prev();
  }

  function onNextHandler() {
    next();
  }

  if (count > 0) {
    return (
      <div>
        <div>
          <span onClick={onPrevHandler}>{"<< prev   "}</span>
          <span onClick={onNextHandler}>{"   next >>"}</span>
        </div>
        <div>
          <span>{`Page ${actual} of ${total}`}</span>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Pagination;
