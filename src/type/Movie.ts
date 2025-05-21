export interface Genre {
  id?: number;
  name: string;
}

export interface IMovie {
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: Genre[];
}
