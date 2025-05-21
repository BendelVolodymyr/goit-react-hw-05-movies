import { Link } from 'react-router-dom';
import { IMovieListProps } from 'type/MoviesList';

import styles from './MoviesList.module.scss';

const MoviesList: React.FC<IMovieListProps> = ({ movies, location }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {movies.map(
          ({ original_title, id }) =>
            original_title !== undefined && (
              <li key={id} className={styles.listItem}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MoviesList;
