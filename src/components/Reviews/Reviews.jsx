import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/getMovies';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const getReviews = async id => {
      try {
        const data = await getMovieReviews(id);
        const { results } = data;
        setMovieReviews(results);
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieReviews.length !== 0 ? (
        <div>
          <p>
            {movieReviews
              .map(({ content }) => {
                return content;
              })
              .join(' ')}
          </p>
        </div>
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
};

export default Reviews;
