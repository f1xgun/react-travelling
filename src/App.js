import Header from './components/Header'
import Information from './components/Information/Information';
import NewsSlider from './components/NewsSlider';
import Places from './components/Places/Places';


function App() {
  return (
    <div className="wrapper">
      <Header />

      <Information />

      <Places />
      
      <NewsSlider/>

    </div>
  );
}

export default App;
