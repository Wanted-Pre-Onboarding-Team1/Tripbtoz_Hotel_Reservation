import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';
import hotelImage from 'assets/image/hotel.jpg';

export default function DetailPage() {
  return (
    <DetailContainer>
      <DetailBlock>
        <h1 className="sr-only">호텔 예약 페이지입니다.</h1>
        <Image
          src="https://source.unsplash.com/collection/3989638/245x245"
          alt="호텔 방 내부 사진"
        />
        <DetailBox>
          <HotelInformation>
            <HotelName>디럭스 마운틴 더블룸</HotelName>
            <GuestInformation>기준 2인 | 최대 4인</GuestInformation>
          </HotelInformation>
          <ReservationButton type="button">예약</ReservationButton>
        </DetailBox>
      </DetailBlock>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.grayBackgroundColor};
`;

const DetailBlock = styled.article`
  display: flex;
  width: 60vw;
  min-width: 768px;
  background-color: white;
`;

const Image = styled.img`
  width: 245px;
  height: 130px;
  border-radius: 4px;
  margin: 30px;
  object-fit: cover;
`;

const DetailBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
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
  display: inline;
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 106px;
  height: 32px;
  margin: 30px;
  border-radius: 4px;
  color: white;
  background-color: ${palette.pointColor};
  cursor: pointer;
`;
