export interface initialStateTypes {
  inviteMovie: MovieTypes;
  genres: GenreTypes[];
  movies: MoviesListByGenresTypes[];
  similarMovies: {
    page: number;
    movies: MovieTypes[];
  };
  credits: {
    cast: CrewmateTypes[];
    directors: CrewmateTypes[];
    writers: CrewmateTypes[];
  };
  keywords: any;
  modal: {
    isOpened: boolean;
    movie: MovieTypes;
  };
}

export interface VideoTypes {
  id?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key?: string;
  name?: string;
  official?: boolean;
  published_at?: string;
  site?: string;
  size?: number;
  type?: string;
  video?: string;
}

export interface MovieTypes {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  runtime?: number;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  trailer?: VideoTypes;
  onClick?: () => void;
}

export interface GenreTypes {
  id: number;
  name: string;
}

export interface MoviesListByGenresTypes {
  genre: number;
  name: string;
  moviesList: MovieTypes[];
}

export interface KeywordTypes {
  id?: number;
  name?: string;
}

export interface CrewmateTypes {
  adult?: boolean;
  gender?: number;
  id: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

// Response types

export interface FetchSimilarMovieResponseTypes {
  page: number;
  results: MovieTypes[];
  total_pages: number;
  total_results: number;
}

export interface fetchMovieKeywordsTypes {
  id: number;
  keywords: KeywordTypes[];
}

export interface FetchMovieCreditsTypes {
  id: number;
  cast: CrewmateTypes[];
  crew: CrewmateTypes[];
}
