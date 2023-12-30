import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesTrend } from 'services/getMovies';

const HomePage = () => {
  const [resultTrend, setResultTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const getTrend = async () => {
      await getMoviesTrend()
        .then(data => {
          const { results } = data;
          setResultTrend(results);
        })
        .catch(error => {
          console.log('Error:', error.message);
        })
        .finally(setIsLoading(false));
    };
    getTrend();
  }, []);

  return (
    <div>
      <ul>
        {resultTrend.map(
          ({ original_title, id }) =>
            original_title !== undefined && (
              <li key={id}>
                <Link to={`/movies/${id}`}>{original_title}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default HomePage;
