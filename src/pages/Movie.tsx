import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieId } from 'services/getMovies';
import { IMovie } from 'type/Movie';
import styles from './Movie.module.scss';

const defaultPhoto =
  'https://www.reelviews.net/resources/img/default_poster.jpg';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Partial<IMovie>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovie = async (id: string | number) => {
      try {
        const data = await getMovieId(id);
        setMovie(data);
      } catch (error) {
        console.log('Error:', error instanceof TypeError);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) getMovie(movieId);
  }, [movieId]);

  const {
    original_title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const resultPercentages = vote_average ? Math.round(vote_average * 10) : null;

  return (
    <>
      {isLoading && <Loader />}
      {original_title && (
        <section className={styles.movieSection}>
          <div className={styles.boxImg}>
            <Link to={backLinkHref} className={styles.backLink}>
              🠐 Go back
            </Link>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                  : defaultPhoto
              }
              alt={original_title}
              width={350}
              loading="lazy"
            />
          </div>

          <div className={styles.boxDescription}>
            <div>
              <h2>{original_title}</h2>
              <h2>{release_date}</h2>
            </div>
            {resultPercentages !== null && (
              <span>User score: {resultPercentages}%</span>
            )}
            <h3>Overview</h3>
            <span>{overview || 'No overview available'}</span>
            <h3>Genres</h3>
            {genres && genres.length > 0 ? (
              <span>{genres.map(({ name }) => name).join(', ')}</span>
            ) : (
              <p>No information available</p>
            )}
          </div>

          <div className={styles.boxInfo}>
            <ul className={styles.movieList}>
              <li>
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{ from: backLinkHref }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: backLinkHref }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </>
  );
};

export default Movie;
