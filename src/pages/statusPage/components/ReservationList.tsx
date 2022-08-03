import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { palette } from 'lib/palette';
import DetailedHotelInfo from 'components/DetailedHotelInfo';
import {
  upcomingStrings,
  canceledStrings,
  pastStrings,
} from '../utils/constants';

interface StringSets {
  upcomings: string[];
  cancels: string[];
  pasts: string[];
}

interface OccupancyInfo {
  base: number;
  max: number;
}

interface HotelsInfo {
  hotel_name: string;
  occupancy: OccupancyInfo;
}

function ReservationList({ dummyList }: { dummyList: HotelsInfo[] }) {
  const location = useLocation();

  const returnNoResult = (locationString: string, stringSets: StringSets) => {
    const { upcomings, cancels, pasts } = stringSets;
    switch (locationString) {
      case '/bookings':
      case '/bookings/upcoming':
        return upcomings.map((upcomingString: string, index: number) => (
          <PStyled key={`${upcomingString[0]}_${index}`}>
            {upcomingString}
          </PStyled>
        ));
      case '/bookings/canceled':
        return cancels.map((canceledString: string, index: number) => (
          <PStyled key={`${canceledString[0]}_${index}`}>
            {canceledString}
          </PStyled>
        ));
      case '/bookings/past':
        return pasts.map((pastString: string, index: number) => (
          <PStyled key={`${pastString[0]}_${index}`}>{pastString}</PStyled>
        ));
      default:
        return '오류가 발생했습니다';
    }
  };

  const hotelsInfo = dummyList.map((dummyInfo: HotelsInfo, index: number) => {
    return (
      <DetailedHotelInfo
        hotelName={dummyInfo.hotel_name}
        occupancy={dummyInfo.occupancy}
        key={`${dummyInfo.hotel_name[0]}_${index}`}
      />
    );
  });

  return (
    <ReservationListBlock>
      <>
        {(!dummyList || dummyList.length === 0) && (
          <NoResultBox>
            <DivStyled>
              <AiOutlineCloseCircle />
            </DivStyled>
            {returnNoResult(location.pathname, {
              upcomings: upcomingStrings,
              cancels: canceledStrings,
              pasts: pastStrings,
            })}
          </NoResultBox>
        )}
        {(dummyList || (dummyList as HotelsInfo[]).length > 0) && hotelsInfo}
      </>
    </ReservationListBlock>
  );
}

export default ReservationList;

const BasicBlock = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${palette.backgroundColor};

  @media (max-width: 1023px) {
    width: 770px;
    padding: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ReservationListBlock = styled(BasicBlock)`
  min-width: 700px;
  height: max-content;

  @media (max-width: 1023px) {
    width: 760px;
  }

  @media (max-width: 767px) {
    min-width: 0;
    width: 100%;
  }
`;

const NoResultBox = styled(BasicBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;

  @media (max-width: 767px) {
    height: 100vh;
  }
`;

const PStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 4vw;
  }
`;

const DivStyled = styled.div`
  font-size: 75px;
  color: ${palette.disabledFontColor};

  @media (max-width: 767px) {
    font-size: 17vw;
  }
`;
