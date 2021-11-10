import React from 'react';
import HotelCard from '../HotelCard/HotelCard';
import MarketInfo from '../MarketInfo';
import MarketPreview from '../MarketPreview/MarketPreview';
import Filter from '../Filter/Filter';

function Places() {
  return (
    <>
      <MarketPreview />
      <MarketInfo />
      <HotelCard 
      name="The Old Bank"
      grade="5"
      place="Oxford City Centre, Oxford "
      imageUrl="img/HotelCards/TheOldBank.png"
      />
      <Filter />
    </>
  )
}

export default Places;