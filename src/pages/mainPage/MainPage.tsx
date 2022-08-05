import { HttpRequest } from 'lib/api/httpRequest';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import HotelList from './components/HotelList';
import { Spinner } from './components/Spiner';
import useIntersectObserver from './hooks/useIntersertObserver';

const HOTEL_PAGE = 10;

function MainPage() {
  const [hotelList, setHotelList] = React.useState<string[]>();
  const { isTargetVisible, observerRef } = useIntersectObserver();
  const [isInitialLoading, setIsInitialLoading] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const hotelRequest = new HttpRequest();

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
        _page: 0,
        _limit: HOTEL_PAGE,
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
        },
        callback,
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isTargetVisible, isInitialLoading, currentPage]);

  return (
    <StyledArticle>
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
