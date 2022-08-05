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
import { returnNoResult, classifyListItems } from '../utils/helpers';

function ReservationList({ hotelList }: { hotelList: any[] }) {
  const location = useLocation();

  const noResults = returnNoResult(location.pathname, {
    upcomings: upcomingStrings,
    cancels: canceledStrings,
    pasts: pastStrings,
  }).map((resultString: string, index: number) => (
    <PStyled key={`${resultString[0]}_${index}`}>{resultString}</PStyled>
  ));

  const filterCondition = (dateString: string, todayDate: Date) =>
    isBefore(new Date(dateString), todayDate);

  const userReservationInfo = classifyListItems(
    hotelList,
    location.pathname,
    filterCondition,
  ).map((reservationInfo: any[], index: number) => {
    return (
      <DetailedHotelInfo
        hotelName={reservationInfo[0].hotelname}
        occupancy={reservationInfo[2].person}
        bookingDates={reservationInfo[1].date}
        key={`${reservationInfo[0].hotelname}_${index}`}
      />
    );
  });

  return (
    <ReservationListBlock>
      <>
        {(!hotelList || hotelList.length === 0) && (
          <NoResultBox>
            <DivStyled>
              <AiOutlineCloseCircle />
            </DivStyled>
            {noResults}
          </NoResultBox>
        )}
        {(hotelList || (hotelList as any[]).length > 0) && userReservationInfo}
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
