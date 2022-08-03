import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/detailPage/DetailPage';
import MainPage from 'pages/mainPage/MainPage';
import StatusPage from 'pages/statusPage/StatusPage';
import Header from 'components/Header';
import CalendarLayout from 'calender/ChihangCalender/CalendarLayout';
import Path from './Path';

function Routing() {
  const statusPageRoutes = [
    Path.bookings,
    Path.upcoming,
    Path.canceled,
    Path.past,
  ].map((path: string, index: number) => {
    return (
      <Route path={path} key={`${path[0]}_${index}`} element={<StatusPage />} />
    );
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
          {statusPageRoutes}
          <Route path={Path.detail} element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
