import { Link } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <div>
      <ul>
        {movies.map(
          ({ original_title, id }) =>
            original_title !== undefined && (
              <li key={id}>
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
