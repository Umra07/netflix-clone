export interface initialStateTypes {
  inviteMovie: MovieTypes;
  genres: GenreTypes[];
  movies: MoviesListByGenresTypes[];
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
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  trailer?: VideoTypes;
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
