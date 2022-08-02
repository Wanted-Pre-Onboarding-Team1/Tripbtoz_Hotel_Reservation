import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/detailPage/DetailPage';
import MainPage from 'pages/mainPage/MainPage';
import StatusPage from 'pages/statusPage/StatusPage';
<<<<<<< HEAD
import Hyeok from 'calender/JonghyeokCalender/Hyeok';

=======
import CalendarLayout from 'calender/ChihangCalender/CalendarLayout';
>>>>>>> e073d1e58c58660406f5b06bcf7283dac0ef55f9
import Path from './Path';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={Path.status} element={<StatusPage />} />
<<<<<<< HEAD
        <Route path={Path.detail} element={<DetailPage />} />
        <Route path={Path.Hyeok} element={<Hyeok />} />
=======
        <Route path={Path.detail} element={<CalendarLayout />} />
>>>>>>> e073d1e58c58660406f5b06bcf7283dac0ef55f9
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
