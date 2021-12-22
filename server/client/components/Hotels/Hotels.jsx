import React from 'react';
import HotelCard from '../HotelCard/HotelCard';

function Hotels() {
  return (
    <div>
      {places.map((obj) => (
          <HotelCard {...item} />
        ))}
    </div>
  )
}

export default Hotels;