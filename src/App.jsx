import Categories from './Components/Categories/Categories';
import Explore from './Components/Explore/Explore';
import FeaturedWhiskeyProducts from './Components/FeaturedProducts/FeaturedWhiskeyProduct';
import FeaturedWineProducts from './Components/FeaturedProducts/FeaturedWineProducts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MoreServices from './Components/MoreServices/MoreServices';
import ProductsComponent from './Components/Products/ProductsComponent/ProductsComponent';
import Signin from './Components/Signin/Signin';
import Slider from './Components/Slider/Slider';
import CartContext from './Context/CartContext';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          index: true,
          element: (
            <>
              <Slider />
              <Categories />
              <Explore />
              <FeaturedWineProducts />
              <FeaturedWhiskeyProducts />
              <MoreServices />
            </>
          ),
        },
        {
          path: 'signin',
          element: <Signin />,
        },
        {
          path: 'new_arrival',
          element: <ProductsComponent />,
        },
      ],
    },
  ]);

  return (
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
  );
}

export default App;
