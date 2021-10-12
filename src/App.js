import Header from './components/Header'
import Button from './components/Button'
import Card from './components/CardPlaces/CardPlaces'
import CardNews from './components/CardNews/CardNews';
import Information from './components/Information/Information';
import NewsSlider from './components/NewsSlider';

const places = [
  {title: 'Candi Borobuddur, Magelang', tag: 'Temple', imageUrl: '1.jpg'},
  {title: 'Malioboro, Yogyakarta', tag: 'City Tour', imageUrl: '2.jpg'},
  {title: 'Balekambang, Malang', tag: 'Beach', imageUrl: '3.jpg'}
];  

const countries = ['Indonesia', 'Swiss', 'Malaysia', 'Japan', 'Maldives'];


function App() {
  return (
    <div className="wrapper">
      <Header />

      <Information />

      <section className="places">
        <h5 className="places__subtitle">PLACES</h5>
        <div className="places__navigation">
          <h3 className="places__title">Explore new places with us </h3>
          <Button title="More" className="places__moreBtn"/>
        </div>
        <ul className="places__selector">
          {countries.map((obj) => (
            <li>{obj}</li>
          ))}
        </ul>
        <div className="places__cards">
          {places.map((obj) => (
            <Card 
              title={obj.title}
              tag={obj.tag}
              imageUrl = {obj.imageUrl}
            />
          ))}
        </div>
      </section>  
      
      <NewsSlider/>

    </div>
  );
}

export default App;
