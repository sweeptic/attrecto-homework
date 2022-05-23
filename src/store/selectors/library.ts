import { genre_ids } from "store/interfaces/movieTypes";
import { genresIdxS } from "store/reducers/genresReducer";

export function getMovieGenres(genreItem: genre_ids, genres: genresIdxS) {
  const result: Array<string> = [];

  if (genreItem) {
    genreItem.forEach((element: number) => {
      const genre = genres[element];
      genre && result.push(genre);
    });
  }

  return result.join(", ");
}
