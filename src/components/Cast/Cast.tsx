import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/getMovies';

import styles from './Cast.module.scss';

const defaultPhoto =
  'https://static.vecteezy.com/system/resources/previews/033/042/430/original/anonymous-man-icon-secret-person-unknown-incognito-vector.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCast = async (id: number | string) => {
      try {
        const data = await getMovieCast(id);
        const { cast } = data;
        setMovieCast(cast);
      } catch (error) {
        console.log('Error:', error instanceof TypeError);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      getCast(movieId);
    }
  }, [movieId]);

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {movieCast.length !== 0 ? (
        <ul className={styles.list}>
          {movieCast.map(({ profile_path, id, original_name, popularity }) => (
            <li key={id} className={styles.listItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                    : defaultPhoto
                }
                alt={original_name}
                width={185}
                height="auto"
              />
              <h4 className={styles.name}>Name: {original_name}</h4>
              <span className={styles.popularity}>
                Popularity: {Math.round(popularity)} %
              </span>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No information available</p>
      )}
    </div>
  );
};

export default Cast;
