import CartComponent from './Components/Cart/CartComponent/CartComponent';
import Categories from './Components/Categories/Categories';
import Explore from './Components/Explore/Explore';
import FeaturedWhiskeyProducts from './Components/FeaturedProducts/FeaturedWhiskeyProduct';
import FeaturedWineProducts from './Components/FeaturedProducts/FeaturedWineProducts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MoreServices from './Components/MoreServices/MoreServices';
import ProductsComponent from './Components/Products/ProductsComponent/ProductsComponent';
import Signin from './Components/Signin/Signin';
import SignUp from './Components/Signup/Signup';
import Slider from './Components/Slider/Slider';
import CartContext from './Context/CartContext';
import { ProtectedRoute } from './Context/ProtectedRoute';
import UserContext from './Context/UserContext';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <UserContext>
        <CartContext>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Categories />
                  <Explore />
                  <FeaturedWineProducts />
                  <FeaturedWhiskeyProducts />
                  <MoreServices />
                </>
              }
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products/:category" element={<ProductsComponent  />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartComponent />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </CartContext>
      </UserContext>
    </Router>
  );
}

export default App;
