import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import ReservationMenu from './components/ReservationMenu';
import ReservationList from './components/ReservationList';

const dummyData = [
  {
    hotel_name: '에코랜드 호텔',
    occupancy: {
      base: 2,
      max: 3,
    },
  },
  {
    hotel_name: '파르나스 호텔 제주',
    occupancy: {
      base: 2,
      max: 2,
    },
  },
  {
    hotel_name: '고창 웰파크시티 힐링카운티',
    occupancy: {
      base: 2,
      max: 2,
    },
  },
  {
    hotel_name: '사우 베이 리조트',
    occupancy: {
      base: 2,
      max: 2,
    },
  },
  {
    hotel_name: '알다프와 빌라스',
    occupancy: {
      base: 2,
      max: 4,
    },
  },
];

function StatusPage() {
  return (
    <StatusContainer>
      <ElementBlock>
        <ReservationMenu />
        <ListContainer>
          {/* <ReservationList dummyList={dummyData} /> */}
          <ReservationList dummyList={[]} />
        </ListContainer>
      </ElementBlock>
    </StatusContainer>
  );
}

export default StatusPage;

const StatusContainer = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 30px 0;
  background-color: ${palette.grayBackgroundColor};

  @media (max-width: 1023px) {
    padding: 0;
  }
`;

const ListContainer = styled.article`
  width: 100%;
  overflow-y: auto;
`;

const ElementBlock = styled.article`
  display: flex;
  justify-content: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
