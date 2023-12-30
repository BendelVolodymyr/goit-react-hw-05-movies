import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/getMovies';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getReviews = async id => {
      await getMovieReviews(id)
        .then(data => setMovieReviews(data.results))
        .catch(error => console.log('Error:', error.message))
        .finally();
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <div>
      <p>
        {movieReviews
          .map(({ content }) => {
            return content;
          })
          .join(' ')}
      </p>
    </div>
  );
};

export default Reviews;
