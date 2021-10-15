import Header from './components/Header/Header'
import Information from './components/Information/Information';
import NewsSlider from './components/NewsSlider/NewsSlider';
import Places from './components/Places/Places';
import FeedBack from './components/FeedBack/FeedBack';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />

        <Information />

        <Places />
        
        <NewsSlider />

        <FeedBack />

        <Subscribe />

      </div>
      <Footer />
    </div>
  );
}

export default App;
