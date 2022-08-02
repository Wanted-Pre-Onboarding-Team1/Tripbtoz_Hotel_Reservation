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
      <DetailBox>
        <Image src={hotelImage} alt="호텔 방 내부 사진" />
        <HotelInformation>
          <HotelName>{hotelName}</HotelName>
          <GuestInformation>
            기준 {occupancy.base}인 | 최대 {occupancy.max}인
          </GuestInformation>
        </HotelInformation>
      </DetailBox>
      <ReservationButton type="button">예약 취소</ReservationButton>
    </DetailBlock>
  );
}

export default DetailedHotelInfo;

const DetailBlock = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* width: 60vw;
  min-width: 768px; */
  width: 100%;
  background-color: white;
`;

const DetailBox = styled.section`
  display: flex;
`;

const Image = styled.img`
  width: 245px;
  height: auto;
  border-radius: 4px;
  margin: 30px;
`;

const HotelInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const HotelName = styled.h2`
  color: black;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const GuestInformation = styled.p`
  color: ${palette.grayTextColor};
  font-size: 12px;
`;

const ReservationButton = styled.button`
  min-width: 106px;
  height: 32px;
  margin: 30px;
  border-radius: 4px;
  color: white;
  background-color: ${palette.pointColor};
  cursor: pointer;
`;
