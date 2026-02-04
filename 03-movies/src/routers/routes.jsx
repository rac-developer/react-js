import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import MovieDetails from '../pages/MovieDetails.jsx';

function MyRoutes() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/movie/:movieId' element={<MovieDetails />} />
      </Routes>
  );
}

export default MyRoutes;