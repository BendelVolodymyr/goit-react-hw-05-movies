import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/getMovies';

const defaultPhoto =
  'https://static.vecteezy.com/system/resources/previews/033/042/430/original/anonymous-man-icon-secret-person-unknown-incognito-vector.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getCast = async id => {
      await getMovieCast(id)
        .then(data => setMovieCast(data.cast))
        .catch(error => console.log('Error:', error.message))
        .finally();
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCast.map(({ profile_path, id, original_name, popularity }) => (
          <li key={id}>
            <img
              width="185"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                  : defaultPhoto
              }
              alt={original_name}
            />
            <h4>Name: {original_name}</h4>
            <span>Popularity: {Math.round(popularity)} %</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;