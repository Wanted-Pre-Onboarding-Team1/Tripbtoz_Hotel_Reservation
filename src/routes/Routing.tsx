import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/detailPage/DetailPage';
import MainPage from 'pages/mainPage/MainPage';
import StatusPage from 'pages/statusPage/StatusPage';
import Hyeok from 'calender/JonghyeokCalender/Hyeok';

import Path from './Path';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={Path.status} element={<StatusPage />} />
        <Route path={Path.detail} element={<DetailPage />} />
        <Route path={Path.Hyeok} element={<Hyeok />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
