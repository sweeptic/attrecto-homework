import { createSelector } from "reselect";

const getMovies = (state: any) => state.movies;
const getGenres = (state: any) => state.genres;

export const selectMovies: any = createSelector([getMovies, getGenres], (movies: any, genres: any) => {
  return Object.keys(movies).reduce((movieArray: any = [], item) => {
    const { title, name, overview } = movies[item];
    const itemCategories = getMovieGenres(movies[item].genre_ids, genres);

    movieArray.push({
      id: item.toString(),
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
      const genre = genres[element]?.name;
      genre && catRes.push(genre);
    });
  }

  return catRes.join(", ");
}
