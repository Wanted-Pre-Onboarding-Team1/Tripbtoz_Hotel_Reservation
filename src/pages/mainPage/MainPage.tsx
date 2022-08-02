import MyCalender from 'calender/JihoCalender/MyCalender';
import React from 'react';
import HotelList from './components/HotelList';

export default function MainPage() {
  return (
    <div>
      <MyCalender />
      <HotelList />
    </div>
  );
}
