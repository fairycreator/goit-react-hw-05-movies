import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Loader from './components/Loader/Loader';

const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const Home = lazy(() => import('./pages/Home/Home'));
const MovieDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
