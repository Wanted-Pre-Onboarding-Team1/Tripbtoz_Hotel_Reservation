import React from 'react';
import HotelList from './components/HotelList';

function MainPage() {
  const [hotelList, setHotelList] = React.useState();
  return (
    <div>
      <HotelList />
    </div>
  );
}

export default MainPage;
