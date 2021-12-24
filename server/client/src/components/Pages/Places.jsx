import React, { useContext, useEffect } from 'react';
import HotelCard from '../HotelCard/HotelCard';
import MarketPreview from '../MarketPreview/MarketPreview';
import Filter from '../Filter/Filter';
import MarketControls from '../MarketControls/MarketControls';
import CityBar from '../CityBar/CityBar';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { fetchCities, fetchHotels } from '../../http/hotelAPI';

const Places = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [sortType, setSortType] = React.useState('popularity');

  const { hotel } = useContext(Context);
  useEffect(() => {
    fetchCities().then((data) => hotel.setCities(data));
    fetchHotels().then((data) => hotel.setHotels(data.rows));
  }, []);
  let cards = hotel.hotels;

  let filterCards = (cards) => {
    switch (sortType) {
      case 'popularity':
        return cards.sort((item, other) => other.reviewsCount - item.reviewsCount);
      case 'price':
        return cards.sort((item, other) => item.price - other.price);

      case 'profit':
        return cards.sort((item, other) => other.grade - item.grade);

      default:
        return cards.sort((item, other) => other.reviewsCount - item.reviewsCount);
    }
  };

  return (
    <>
      <MarketPreview />
      <MarketControls
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        sortType={sortType}
        setSortType={setSortType}
      />
      <div className="places-content">
        <Filter />
        <div>
          {filterCards(cards)
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((card) => (
              <HotelCard key={card.id} {...card} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Places;
