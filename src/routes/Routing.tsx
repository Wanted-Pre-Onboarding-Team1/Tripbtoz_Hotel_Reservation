import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/detailPage/DetailPage';
import MainPage from 'pages/mainPage/MainPage';
import StatusPage from 'pages/statusPage/StatusPage';
import Header from 'components/Header';
import Path from './Path';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path={Path.status} element={<StatusPage />} />
          <Route path={Path.detail} element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
