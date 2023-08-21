import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../components/API/Api';

import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import { Main, Title, StyledList, StyledItem, MovieLink } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>
      <StyledList>
        {films.map(film => (
          <StyledItem key={film.id}>
            <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </MovieLink>
          </StyledItem>
        ))}
      </StyledList>

      {loading && <Loader />}
    </Main>
  );
};

Home.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Home;
