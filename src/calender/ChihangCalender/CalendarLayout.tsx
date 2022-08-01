import React from 'react';
import { intervalToDuration } from 'date-fns';
import styled from 'styled-components';
import Calendar from './Calendar';
import { useReservation } from './hook';

function CalendarLayout() {
  const [monthIndex, setMonthIndex] = React.useState<number>(0);
  const {
    firstReservation,
    lastReservation,
    reservationRange,
    setReservationDay,
  } = useReservation();

  console.log(
    firstReservation,
    lastReservation,
    intervalToDuration(reservationRange),
  );

  return (
    <div>
      <CalendarContainer>
        <Calendar
          monthIndex={monthIndex}
          reservationRange={reservationRange}
          firstReservation={firstReservation}
          lastReservation={lastReservation}
          setReservationDay={setReservationDay}
        />
        <Calendar
          monthIndex={monthIndex + 1}
          reservationRange={reservationRange}
          firstReservation={firstReservation}
          lastReservation={lastReservation}
          setReservationDay={setReservationDay}
        />
      </CalendarContainer>
      <Button
        type="button"
        onClick={() => {
          setMonthIndex((previousIndex) => previousIndex - 1);
        }}
      >
        이전달
      </Button>
      <Button
        type="button"
        onClick={(e) => {
          setMonthIndex((previousIndex) => previousIndex + 1);
        }}
      >
        다음달
      </Button>
    </div>
  );
}

export default CalendarLayout;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid black;
`;

const CalendarContainer = styled.div`
  display: flex;
`;
