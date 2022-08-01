import React from 'react';
import styled from 'styled-components';

import {
  startOfMonth,
  startOfWeek,
  addDays,
  getWeeksInMonth,
  addWeeks,
  addMonths,
  format,
  isSameMonth,
  isWithinInterval,
  isSameDay,
  isBefore,
  isAfter,
} from 'date-fns';

function Test() {
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
  const today = addMonths(new Date(), monthIndex);
  const firstDayOfMonth = startOfMonth(today);
  const firstDayOfWeek = startOfWeek(firstDayOfMonth);
  const setReservationDay = (currentDay: Date) => {
    switch (true) {
      case firstReservation == null:
        setFirstReservation(currentDay);
        break;
      case firstReservation != null && lastReservation == null:
        switch (true) {
          case isSameDay(currentDay, firstReservation as Date):
            setFirstReservation(null);
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
        setFirstReservation(null);
        setLastReservation(null);
        setReservationRange((previousRange) => {
          return {
            ...previousRange,
            start: today,
            end: today,
          };
        });
        break;
    }
  };
  const calendarShape = Array.from(
    { length: getWeeksInMonth(today) },
    (v, k) => k,
  ).map((val: number, indexa: number) => {
    return (
      <Week>
        {Array.from({ length: 7 }, (w, l) => l).map(
          (valb: number, indexb: number) => {
            const currentDay = addDays(
              addWeeks(firstDayOfWeek, indexa),
              indexb,
            );
            return (
              <Day
                isCurrentMonth={isSameMonth(currentDay, today)}
                isInRange={isWithinInterval(currentDay, reservationRange)}
                isReserved={
                  isSameDay(firstReservation as Date, currentDay) ||
                  isSameDay(lastReservation as Date, currentDay)
                }
                onClick={() => setReservationDay(currentDay)}
              >
                {format(currentDay, 'MM/dd')}
              </Day>
            );
          },
        )}
      </Week>
    );
  });
  return (
    <div>
      <CalendarContainer>
        <CalendarBox>{calendarShape}</CalendarBox>
        <CalendarBox>{calendarShape}</CalendarBox>
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

export default Test;

const Day = styled.div<{
  isCurrentMonth: boolean;
  isInRange?: boolean;
  isReserved: boolean;
}>`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  color: ${({ isCurrentMonth }) => (isCurrentMonth ? 'black' : 'lightgray')};
  background: ${({ isInRange, isReserved }) =>
    // eslint-disable-next-line no-nested-ternary
    isInRange
      ? isReserved
        ? 'skyblue'
        : 'tomato'
      : isReserved
      ? 'skyblue'
      : 'transparent'};
  cursor: pointer;
`;

const Week = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  border: 1px solid black;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid black;
`;

const CalendarContainer = styled.div`
  display: flex;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
