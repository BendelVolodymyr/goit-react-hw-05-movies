import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoveisList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesTrend } from 'services/getMovies';
import { TMovie } from 'type/MoviesList';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const [resultTrend, setResultTrend] = useState<TMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const getTrend = async () => {
      try {
        const data = await getMoviesTrend();
        const { results } = data;
        setResultTrend(results);
      } catch (error) {
        console.log('Error:', error instanceof TypeError);
      } finally {
        setIsLoading(false);
      }
    };
    getTrend();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <MoviesList movies={resultTrend} location={location} />
      )}
    </div>
  );
};

export default HomePage;
