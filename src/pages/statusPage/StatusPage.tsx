import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/palette';
import ReservationMenu from './components/ReservationMenu';

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
        <ReservationListBlock>foo</ReservationListBlock>
      </ElementBlock>
    </StatusContainer>
  );
}

export default StatusPage;

const StatusContainer = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  background-color: ${palette.statusPageBackground};

  @media (max-width: 1023px) {
    padding: 0;
  }
`;

const ElementBlock = styled.article`
  display: flex;
  justify-content: center;
  width: max-content;
  height: 100%;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.5);
  }
`;

const BasicBlock = styled.section`
  min-width: 250px;
  height: 170px;
  padding: 10px 0;
  background-color: ${palette.backgroundColor};

  @media (max-width: 1023px) {
    width: 770px;
    padding: 0;
  }
`;

const ReservationListBlock = styled(BasicBlock)`
  min-width: 700px;
  height: 450px;

  @media (max-width: 1023px) {
    width: 770px;
  }
`;
