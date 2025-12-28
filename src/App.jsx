import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from './Shop';
import Catalog from './catalog/Catalog';
import Delivery from './delivery/Delivery';
import About from './about/About';
import Cart from './cart/Cart';
import NotFound from './NotFound';


function App() {

  return (
    <div>
      <Router>
        <nav>
          <Link to="/" className="link linkHome">SHOP-SHOP</Link>
          <Link to="/women" className="link">Женщины</Link>
          <Link to="/men" className="link">Мужчины</Link>
          <Link to="/children" className="link">Дети</Link>
          <Link to="/delivery" className="link">Доставка</Link>
          <Link to="/about" className="link">Контакты</Link>
          <Link to="/cart" className="link">Корзина</Link>
        </nav>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Shop />} />
          <Route path="/women" element={<Catalog />} />
          <Route path="/men" element={<Catalog />} />
          <Route path="/children" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;