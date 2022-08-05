import MyCalender from 'calender/JihoCalender/MyCalender';
import { addDays, startOfToday } from 'date-fns';
import { HttpRequest } from 'lib/api/httpRequest';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import HotelList from './components/HotelList';
import { Spinner } from './components/Spiner';
import Search from './components/Search';
import useIntersectObserver from './hooks/useIntersertObserver';

const HOTEL_PAGE = 10;
// 페이지당 10개씩 호출하기로 한 약속

function MainPage() {
  const today = startOfToday();
  const [hotelList, setHotelList] = React.useState<string[]>();
  // 호텔리스트 저장
  const { isTargetVisible, observerRef } = useIntersectObserver();
  // 무한 스크롤 훅
  const [isInitialLoading, setIsInitialLoading] = React.useState<boolean>(true);
  // 가져올 데이터가 있을 때와 없을 때
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // 데이터 로딩상태
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
  // 데이터 전체의 수를 파악해 페이지별로 나우어 줌 159개의 수를 가지고 있다면 15페이지로 나눈 후
  // 나머지 9는 올림하여 16페이지로 만들어 줌

  const currentPage = getCurrentPageNumber(hotelList);

  useEffect(() => {
    const callback = ({ data }: any) => {
      setHotelList(data);
      setIsInitialLoading(false);
    };
    hotelRequest.getWithParams({
      url: 'hotel_list',
      config: {
        _page: 0,
        _limit: HOTEL_PAGE,
        hotel_name_like: params.title,
        'occupancy.max_gte': params.person,
      },
      callback,
    });
  }, []);
  // 맨 처음 가져오는 10개의 객체

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
        <StyledPoint>1000</StyledPoint>개
      </StyledText>
      <div>
        {hotelList?.map((value: any, index: number) => (
          <HotelList key={index} value={value} />
        ))}
      </div>
      {isLoading && (
        <StyledLoading>
          <Spinner />
        </StyledLoading>
      )}
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
  @media screen and (max-width: 480px) {
    width: 90%;
    font-size: 1.1rem;
  }
`;

const StyledPoint = styled.span`
  font-weight: 500;
`;

const StyledLoading = styled.body`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  opacity: 0.9;
  align-items: center;
`;
