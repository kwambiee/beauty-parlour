import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import BrandPage from './pages/BrandPage';

const App = () => (
  <div>
    <nav>
      <Link to="/" />
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="brands" element={<BrandPage />}>
        <Route path=":brandName" element={<BrandPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
