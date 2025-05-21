import type { Location } from 'react-router-dom';

export type TMovie = {
  original_title: string;
  id: string | number;
};

export interface IMovieListProps {
  movies: TMovie[];
  location: Location;
}
