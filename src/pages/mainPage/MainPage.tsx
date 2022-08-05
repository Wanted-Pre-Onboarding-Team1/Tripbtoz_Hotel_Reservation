import MyCalender from 'calender/JihoCalender/MyCalender';
import { addDays, startOfToday } from 'date-fns';
import { HttpRequest } from 'lib/api/httpRequest';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import HotelList from './components/HotelList';
import Search from './components/Search';
import useIntersectObserver from './hooks/useIntersertObserver';

const HOTEL_PAGE = 10;

function MainPage() {
  const today = startOfToday();

  const [hotelList, setHotelList] = React.useState<any>();
  // 호텔리스트 저장
  const { isTargetVisible, observerRef } = useIntersectObserver();
  // 무한 스크롤 훅
  const [isInitialLoading, setIsInitialLoading] = React.useState<boolean>(true);
  // 가져올 데이터가 있을 때와 없을 때
  const [isLoading, setIsLoading] = React.useState(false);
  // 로딩상태
  const hotelRequest = new HttpRequest();
  // API 요청
  const [params, setParams] = React.useState({
    title: '',
    person: 5,
    date: { checkin: addDays(today, 7), checkout: addDays(today, 8) },
  });
  const getCurrentPageNumber = (currentHotelList: any) => {
    const pageNumber = (currentHotelList?.length as number) / HOTEL_PAGE;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  const currentPage = getCurrentPageNumber(hotelList);

  useEffect(() => {
    const callback = ({ data }: any) => {
      setHotelList(data);
      setIsInitialLoading(false);
    };
    hotelRequest.getWithParams({
      url: 'hotel_list',
      config: {
        _page: 1,
        _limit: HOTEL_PAGE,
        hotel_name_like: params.title,
        'occupancy.max_gte': params.person,
      },
      callback,
    });
  }, []);

  useEffect(() => {
    const callback = ({ data }: any) => {
      setHotelList((prevMovieList: any) => [...prevMovieList, ...data]);
    };
    setIsLoading(true);
    isTargetVisible &&
      !isInitialLoading &&
      hotelRequest.getWithParams({
        url: 'hotel_list',
        config: {
          _page: currentPage + 1,
          _limit: HOTEL_PAGE,
          hotel_name_like: params.title,
          'occupancy.max_gte': params.person,
        },
        callback,
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isTargetVisible, isInitialLoading, currentPage, params]);

  return (
    <StyledArticle>
      <Search />
      <StyledText>
        <StyledPoint>1000</StyledPoint>개의 호텔 중 예약가능 호텔
        <StyledPoint>{hotelList?.length}</StyledPoint>개
      </StyledText>
      <div>
        {hotelList?.map((value: any, index: number) => (
          <HotelList key={index} value={value} />
        ))}
      </div>
      {isLoading && <p>loading...</p>}
      <div style={{ height: '10px' }} ref={observerRef} />
    </StyledArticle>
  );
}

export default MainPage;

const StyledArticle = styled.div`
  width: 100%;
`;

const StyledText = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 2px 3px 5px 0 #f3f3f3;
  font-size: 1.2rem;
`;

const StyledPoint = styled.span`
  font-weight: 500;
`;
