import React from 'react';
import styled from 'styled-components';
import hotelImage from 'assets/image/hotel.jpg';
import { palette } from 'lib/styles/palette';

interface OccupancyInfo {
  base: number;
  max: number;
}

interface HotelsInfo {
  hotelName: string;
  occupancy: OccupancyInfo;
}

function DetailedHotelInfo({ hotelName, occupancy }: HotelsInfo) {
  return (
    <DetailBlock>
      <h1 className="sr-only">호텔 예약 페이지입니다.</h1>
      <Image src={hotelImage} alt="호텔 방 내부 사진" />
      <DetailBox>
        <HotelInformation>
          <StyledGrade>5.0성급</StyledGrade>
          <HotelName>{hotelName}</HotelName>
          <GuestInformation>
            기준 {occupancy.base}인 | 최대 {occupancy.max}인
          </GuestInformation>
        </HotelInformation>
        <ButtonBox>
          <ReservationButton type="button">예약 취소</ReservationButton>
        </ButtonBox>
      </DetailBox>
    </DetailBlock>
  );
}

export default DetailedHotelInfo;

const DetailBlock = styled.article`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #f3f3f3;
  background-color: white;
  transition: all 0.5s;
  :hover {
    box-shadow: 2px 3px 5px 5px #f3f3f3;
  }
`;

const DetailBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 30%;
  border-radius: 4px;
  margin: 30px 20px;
  object-fit: cover;

  @media (max-width: 480px) {
    display: none;
  }
`;

const HotelInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const StyledGrade = styled.div`
  width: max-content;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px 7px;
  font-size: 1rem;
  box-shadow: 0 1px 1px 0;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const HotelName = styled.h2`
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const GuestInformation = styled.p`
  color: ${palette.grayTextColor};
  font-size: 12px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
`;

const ReservationButton = styled.button`
  display: inline;
  width: 106px;
  height: 32px;
  margin: 30px 20px;
  border-radius: 4px;
  color: white;
  background-color: ${palette.pointColor};
  /* cursor: pointer; */
`;
