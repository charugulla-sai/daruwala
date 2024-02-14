import Categories from './Components/Categories/Categories';
import Explore from './Components/Explore/Explore';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Explore />
    </>
  );
}

export default App;
