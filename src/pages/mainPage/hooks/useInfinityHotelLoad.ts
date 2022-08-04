import { HttpRequest } from 'lib/api/httpRequest';
import React from 'react';
import useIntersectObserver from './useIntersertObserver';

const useInfinityHotelLoad = () => {
  const [hotelList, setHotelList] = React.useState();
  // 호텔리스트 저장
  const hotelRequest = new HttpRequest();
  // API 요청
  const [isLoading, setIsLoading] = React.useState();
  // 로딩상태
  const { isTargetVisible, observerRef } = useIntersectObserver();
  // 무한 스크롤 훅
};

export default useInfinityHotelLoad;
