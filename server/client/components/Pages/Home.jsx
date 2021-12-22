import React from 'react';
import Information from '../Information/Information';
import Places from '../Places/Places';
import NewsSlider from '../NewsSlider/NewsSlider';
import FeedBack from '../FeedBack/FeedBack';
import Subscribe from '../Subscribe/Subscribe';
import axios from 'axios';

function Home() {
  return (
    <>
      <Information />

      <Places />

      <NewsSlider />

      <FeedBack />

      <Subscribe />
    </>
  );
}

export default Home;
