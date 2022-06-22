import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HomePage from './pages/Homepage';
import BrandPage from './pages/BrandPage';
import Productpage from './pages/ProductPage';

const App = () => (
  <div className="brandWrapper">
    <nav>
      <Link to="/">
        <HomeIcon
          color="secondary"
          sx={{
            fontSize: '2rem',
          }}
        />
      </Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="brands" element={<BrandPage />}>
        <Route path=":brandName" element={<BrandPage />} />
      </Route>
      <Route path="products/:productId" element={<Productpage />} />
    </Routes>
  </div>
);

export default App;
