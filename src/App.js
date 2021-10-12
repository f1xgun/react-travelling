import Header from './components/Header'
import Button from './components/Button'
import Card from './components/CardPlaces/CardPlaces'
import CardNews from './components/CardNews/CardNews';

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

      <section className="information">
        <h1 className="information__title">Your <span>Dream Holiday</span> is Waiting for you </h1>
        <p className="information__text">Find your favorite vacation for your story arround the glob and make your trip meaning full.</p>
        <ul className="offer__info">
          <li>
            <h4>Location</h4>
            <p>Indonesia</p>
          </li>
          <li>
            <h4>Date</h4>
            <p>Wed, 3 Nov 2021</p>
          </li>
          <li>
            <h4>Range Price</h4>
            <p>$200 - $600</p>
          </li>
          <li><Button title="Search" className="info__search-btn" /></li>
        </ul>
        <img className="information__bg" src="/img/info__bg.png" alt="Beach"></img>
      </section>

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
      
      <section className="news">
        <h5 className="news__subtitle">NEWS</h5>
        <h3 className="news__title">Amazing offers and updates</h3>
        
        <div className="slideItems">
          <div className="verticalItems"></div>
        </div>

        <button className="arrowLeft">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16L9.41 14.59L3.83 9L24 9V7L3.83 7L9.42 1.42L8 0L0 8L8 16Z" fill="#F85A47"/>
          </svg>
        </button>
        <button className="arrowRight">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#F85A47"/>
          </svg>
        </button>
      </section>

    </div>
  );
}

export default App;
