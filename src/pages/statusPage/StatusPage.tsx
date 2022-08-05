import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

import ReservationMenu from './components/ReservationMenu';
import ReservationList from './components/ReservationList';
import useProcessReservationList from './hooks/useProcessReservationList';

function StatusPage() {
  const { totalHotelLists } = useProcessReservationList();

  return (
    <StatusContainer>
      <ElementBlock>
        <ReservationMenu />
        <ListContainer>
          <ReservationList hotelList={totalHotelLists} />
          {/* <ReservationList hotelList={[]} /> */}
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
  background-color: ${palette.grayBackgroundColor};

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const ListContainer = styled.article`
  flex: 2;
  width: 100%;
  overflow-x: hidden;
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
