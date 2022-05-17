import MovieItem from "components/movie-item/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "store/actions/detail";
import { getMovesRawData } from "store/reducers/moviesReducer";

const MovieList = () => {
  const moviesData = useSelector((state) => getMovesRawData(state));
  const dispatch = useDispatch();

  const moviesList: any = [];

  function onMovieSelectHandler(item: number) {
    dispatch(fetchDetail({ query: item.toString() }));
  }

  function MovieFactory() {
    for (const key in moviesData) {
      if (Object.prototype.hasOwnProperty.call(moviesData, key)) {
        const element = moviesData[key];
        moviesList.push(<MovieItem key={key} item={element} onDetails={onMovieSelectHandler} />);
      }
    }
  }
  MovieFactory();

  return <>{moviesList}</>;
};

export default MovieList;
