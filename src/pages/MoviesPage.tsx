import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoveisList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/getMovies';
import styles from './MoviesPage.module.scss';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('search');
    if (!query) return;
    getSearchName(query);
  }, [searchParams]);

  const getSearchName = async (Name: string) => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getMovieSearch(Name);
      const { results } = data;
      if (results.length === 0) {
        setError('No movies found for this search');
      }
      setMovies(results);
    } catch (error) {
      console.log('Error:', error instanceof TypeError);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchName.trim()) {
      alert('Search field cannot be empty');
      return;
    }
    setSearchParams({ search: searchName });
    setSearchName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search movies"
          name="search"
          value={searchName}
          onChange={handleInputChange}
          className={styles.searchInput}
          aria-label="Search movies"
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      {error && <p className={styles.errorAlert}>{error}</p>}
      {isLoading && <Loader />}
      <MoviesList movies={movies} location={location} />
    </>
  );
};

export default MoviesPage;
