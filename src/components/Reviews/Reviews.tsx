import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/getMovies';
import { IReviews } from 'type/Reviews';

import styles from './Reviews.module.scss';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState<IReviews[]>([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async (id: number | string) => {
      try {
        const data = await getMovieReviews(id);
        const { results } = data;
        setMovieReviews(results);
      } catch (error) {
        console.log('Error:', error instanceof TypeError);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      getReviews(movieId);
    }
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieReviews.length !== 0 ? (
        <div className={styles.container}>
          {movieReviews.map(({ id, content }) => (
            <p key={id}>{content}</p>
          ))}
        </div>
      ) : (
        !isLoading && <p className={styles.noReviews}>There are no reviews</p>
      )}
    </>
  );
};

export default Reviews;
