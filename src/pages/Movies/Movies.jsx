import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Input, Button } from './Movies.styled';

const Movies = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

Movies.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Movies;
