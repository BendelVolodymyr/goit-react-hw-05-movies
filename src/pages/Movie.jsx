import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieId } from 'services/getMovies';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async id => {
      await getMovieId(id)
        .then(data => setMovie(data))
        .catch(error => console.log('Error:', error.message))
        .finally();
    };
    getMovie(movieId);
  }, [movieId]);

  const handleGoBack = e => {
    console.log(movie);
  };

  const {
    original_title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const resultPercentages = Math.round(vote_average * 10);

  return (
    <section>
      <div>
        <button type="button" onClick={handleGoBack}>
          Go back
        </button>
        {poster_path !== undefined && (
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt={original_title}
          />
        )}
      </div>
      <div>
        <div>
          <h2>{original_title}</h2> <h2>({release_date})</h2>
        </div>
        <span>Use score: {resultPercentages}%</span>
        <h3>Overview</h3>
        <span>{overview}</span>
        <h3>Genres</h3>
        {genres !== undefined && (
          <span>
            {genres
              .map(element => {
                return element.name;
              })
              .join(' ')}
          </span>
        )}
      </div>
      <div>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default Movie;
