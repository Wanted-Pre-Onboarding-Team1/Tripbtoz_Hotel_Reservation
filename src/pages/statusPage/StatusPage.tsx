import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/palette';
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
  width: 100%;
  height: calc(100% - 86px);
  padding: 30px 0;
  background-color: ${palette.statusPageBackground};

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const ListContainer = styled.article`
  flex: 2;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 480px) {
    height: 100%;
  }
`;

const ElementBlock = styled.article`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 30px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
  }
`;
