import React from 'react';
import styled from 'styled-components';
import {
  startOfMonth,
  startOfWeek,
  addMonths,
  isSameDay,
  isBefore,
} from 'date-fns';
import Calendar from './Calendar';

function CalendarLayout() {
  const [monthIndex, setMonthIndex] = React.useState<number>(0);
  const [firstReservation, setFirstReservation] = React.useState<Date | null>(
    null,
  );
  const [lastReservation, setLastReservation] = React.useState<Date | null>(
    null,
  );
  const [reservationRange, setReservationRange] = React.useState<Interval>({
    start: Date.parse('0'),
    end: Date.parse('0'),
  });
  const setReservationDay = (currentDay: Date) => {
    switch (true) {
      case firstReservation == null:
        setFirstReservation(currentDay);
        break;
      case firstReservation != null && lastReservation == null:
        switch (true) {
          case isSameDay(currentDay, firstReservation as Date):
            break;
          case !isBefore(currentDay, firstReservation as Date):
            setLastReservation(currentDay);
            setReservationRange((previousRange) => {
              return {
                ...previousRange,
                start: firstReservation as Date,
                end: currentDay,
              };
            });
            break;
          default:
            setFirstReservation(currentDay);
            break;
        }
        break;
      default:
        setFirstReservation(currentDay);
        setLastReservation(null);
        setReservationRange((previousRange) => {
          return {
            ...previousRange,
            start: Date.parse('0'),
            end: Date.parse('0'),
          };
        });
        break;
    }
  };
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
