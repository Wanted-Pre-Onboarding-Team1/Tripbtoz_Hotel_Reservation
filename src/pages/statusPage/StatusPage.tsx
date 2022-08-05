import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import { HotelObject } from 'types/hotelList';
import { isBefore } from 'date-fns';
import ReservationMenu from './components/ReservationMenu';
import ReservationList from './components/ReservationList';

function StatusPage() {
  const [totalHotelLists, setTotalLists] = React.useState<any[]>([]);
  React.useEffect(() => {
    const storagedList = Object.keys(localStorage).map((key: string) => {
      return JSON.parse(localStorage.getItem(key) as string);
    });
    storagedList.forEach((listItem: any, index: number) => {
      if (isBefore(new Date(listItem[1].checkout), new Date())) {
        localStorage.setItem(
          listItem[0].hotelname,
          JSON.stringify([
            ...storagedList[index].slice(0, storagedList[index].length - 1),
            { past: true },
          ]),
        );
      }
    });
    setTotalLists((previousList: any[]) =>
      previousList.slice(previousList.length).concat(storagedList),
    );
  }, []);
  return (
    <StatusContainer>
      <ElementBlock>
        <ReservationMenu />
        <ListContainer>
          <ReservationList hotelList={totalHotelLists} />
          {/* <ReservationList dummyList={[]} /> */}
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
