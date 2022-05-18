import { createSelector } from "reselect";
import { getGenresObject } from "store/reducers/genresReducer";
import { getMovies } from "store/reducers/moviesReducer";

export const selectMovies: any = createSelector([getMovies, getGenresObject], (movies: any, genres: any) => {

  return movies.reduce((movieArray: any = [], item: any) => {
    const { id, title, name, overview } = item;

    const itemCategories = getMovieGenres(item.genre_ids, genres);

    movieArray.push({
      id,
      title: title ?? name,
      overview,
        itemCategories,
    });

    return movieArray;
  }, []);
});

export function getMovieGenres(movieItem: any, genres: any) {
  const catRes: any[] = [];

  if (movieItem) {
    movieItem.forEach((element: any) => {
      const genre = genres[element];
      genre && catRes.push(genre);
    });
  }

  return catRes.join(", ");
}
