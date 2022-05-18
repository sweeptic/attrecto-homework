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
