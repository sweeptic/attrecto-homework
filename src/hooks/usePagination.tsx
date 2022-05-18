import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "store/actions/movie";
import { getSearchResults, getSearchTotalPage } from "store/reducers/moviesReducer";

function usePagination(enteredFilter?: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const maxPage = useSelector((state) => getSearchTotalPage(state));
  const SearchResults = useSelector((state) => getSearchResults(state));
  const [isPaginationEnabled, setPaginationEnabled] = useState(false);

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }
  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  useEffect(() => {
    if (isPaginationEnabled) {
      const query = enteredFilter.enteredFilter;
      dispatch(fetchMovies({ query: query, page: currentPage }));
    }
  }, [currentPage]);

  useEffect(() => {
    if (SearchResults) {
      setPaginationEnabled(true);
      setCurrentPage(1);
    } else {
      setPaginationEnabled(false);
    }
  }, [SearchResults]);

  return { next, prev, currentPage, maxPage };
}

export default usePagination;
