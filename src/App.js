import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BrandPage from "./pages/BrandPage";
import Productpage from "./pages/ProductPage";

const App = () => (
  <div>
    <nav>
      <Link to='/' />
    </nav>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='brands' element={<BrandPage />}>
        <Route path=':brandName' element={<BrandPage />} />
      </Route>
      <Route path='products/:productId' element={<Productpage />} />
    </Routes>
  </div>
);

export default App;
