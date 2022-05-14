import MovieItem from "components/movie-item/MovieItem";
import React from "react";
import { useSelector } from "react-redux";
import { getMovesRawData } from "store/reducers/moviesReducer";

const MovieList = () => {
  const moviesData = useSelector((state) => getMovesRawData(state));

  const moviesList: any = [];

  for (const key in moviesData) {
    if (Object.prototype.hasOwnProperty.call(moviesData, key)) {
      const element = moviesData[key];
      moviesList.push(<MovieItem key={key} item={element} />);
    }
  }

  return <>{moviesList}</>;
};

export default MovieList;
