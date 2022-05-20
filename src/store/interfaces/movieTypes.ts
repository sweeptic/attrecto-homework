export type moviesData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type genresResultData = {
  genres: {
    id: number;
    name: string;
  };
};

export type moviesResultData = {
  page: number;
  total_pages: number;
  total_results: number;
  results: moviesData[];
};

export type detailResultData = {
  adult: number;
  backdrop_path: null | string;
  belongs_to_collection: null | string;
  budget: number;
  genres: genresResultData[];
  homepage: null | string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: unknown[];
  production_countries: unknown[];
  release_date: number;
  revenue: number;
  runtime: number;
  spoken_languages: unknown[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
