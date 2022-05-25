import { TGenre_ids } from "store/interfaces/movieTypes";
import { IGenresIndex } from "store/reducers/genresReducer";

export function getMovieGenres(genreItem: TGenre_ids, genres: IGenresIndex) {
  const result: Array<string> = [];

  if (genreItem && genres) {
    genreItem.forEach((element: number) => {
      const genre = genres[element];
      genre && result.push(genre);
    });
  }

  return result.join(", ");
}
