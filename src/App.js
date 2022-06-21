import "./App.css";
import HomePage from "./pages/Homepage";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import BrandPage from "./pages/BrandPage";

const App = () => (
  <div>
    <nav>
      <Link to='/'></Link>
    </nav>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='brands' element={<BrandPage />}>
        <Route path=':brandName' element={<BrandPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
