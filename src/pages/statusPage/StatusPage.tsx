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
    setTotalLists((previousList: any[]) =>
      previousList.slice(previousList.length).concat(storagedList),
    );
    // console.log(new Date(storagedList[0][1].date.checkin));
    // console.log(
    //   storagedList.map((listItem: any) =>
    //     console.log(storagedList[3].canceled),
    //   ),
    // );
    // localStorage.setItem(
    //   'Gunsan Clover',
    //   JSON.stringify([
    //     { hotelname: 'Gunsan Clover' },
    //     {
    //       date: {
    //         checkin: '2022-07-02T15:00:00.000Z',
    //         checkout: '2022-07-13T15:00:00.000Z',
    //       },
    //     },
    //     { person: 2 },
    //     { canceled: false },
    //     { past: false },
    //   ]),
    // );
    // console.log(
    //   storagedList.filter((listItem: any) => {
    //     console.log(
    //       new Date(listItem[1].checkout),
    //       new Date(),
    //       isBefore(new Date(listItem[1].checkout), new Date()),
    //     );
    //     return isBefore(new Date(listItem[1].checkout), new Date());
    //   }),
    // );
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
