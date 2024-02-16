import Categories from './Components/Categories/Categories';
import Explore from './Components/Explore/Explore';
import FeaturedWhiskeyProducts from './Components/FeaturedProducts/FeaturedWhiskeyProduct';
import FeaturedWineProducts from './Components/FeaturedProducts/FeaturedWineProducts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MoreServices from './Components/MoreServices/MoreServices';
import Slider from './Components/Slider/Slider';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Explore />
      <FeaturedWineProducts />
      <FeaturedWhiskeyProducts />
      <MoreServices />
      <Footer />
    </>
  );
}

export default App;
