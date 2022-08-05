import React from 'react';
import { useLocation } from 'react-router-dom';
import { isBefore } from 'date-fns';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { palette } from 'lib/styles/palette';
import DetailedHotelInfo from 'components/DetailedHotelInfo';
import { HotelObject } from 'types/hotelList';
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

function ReservationList({ hotelList }: { hotelList: any[] }) {
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

  const classifyListItems = () => {
    let result = [];
    const today = new Date();
    switch (location.pathname) {
      case '/bookings/canceled':
        result = hotelList.filter((listItem: any) => listItem[3].canceled);
        break;
      case '/bookings/past':
        result = hotelList.filter(
          (listItem: any) =>
            isBefore(new Date(listItem[1].checkout), today) || listItem[4].past,
        );
        break;
      default:
        result = hotelList.filter(
          (listItem: any) => !listItem[3].canceled && !listItem[4].past,
        );
        break;
    }
    return result;
  };

  const hotelsInfo = classifyListItems().map(
    (reservationInfo: any[], index: number) => {
      return (
        <DetailedHotelInfo
          hotelName={reservationInfo[0].hotelname}
          occupancy={reservationInfo[2].person}
          bookingDates={reservationInfo[1].date}
          key={`${reservationInfo[0].hotelname}_${index}`}
        />
      );
    },
  );

  return (
    <ReservationListBlock>
      <>
        {(!hotelList || hotelList.length === 0) && (
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
        {(hotelList || (hotelList as any[]).length > 0) && hotelsInfo}
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
  background-color: white;
`;

const ReservationListBlock = styled(BasicBlock)`
  position: relative;
  height: max-content;

  @media (max-width: 480px) {
    min-height: 100%;
  }
`;

const NoResultBox = styled(BasicBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
`;

const PStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const DivStyled = styled.div`
  font-size: 75px;
  color: ${palette.disabledFontColor};
`;
