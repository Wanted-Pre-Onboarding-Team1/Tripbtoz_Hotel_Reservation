/* eslint-disable no-nested-ternary */
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
  endOfMonth,
} from 'date-fns';
import { makeCustomArray } from './util';

interface CalendarProps {
  monthIndex: number;
  reservationRange: Interval;
  firstReservation: Date | null;
  lastReservation: Date | null;
  setReservationDay: (currentDay: Date) => void;
}

function Calendar({
  monthIndex,
  reservationRange,
  firstReservation,
  lastReservation,
  setReservationDay,
}: CalendarProps) {
  const today = addMonths(new Date(), monthIndex);
  const firstDayOfThisMonth = startOfMonth(today);
  const lastDayOfThisMonth = endOfMonth(today);
  const firstDayOfWeek = startOfWeek(firstDayOfThisMonth);
  const weeksArray = makeCustomArray(getWeeksInMonth(today));
  const daysArray = makeCustomArray(7);
  const calendarShape = weeksArray.map((vala: number, indexa: number) => {
    return (
      <Week>
        {daysArray.map((valb: number, indexb: number) => {
          const currentDay = addDays(addWeeks(firstDayOfWeek, indexa), indexb);
          let result: React.ReactNode;
          if (isSameMonth(currentDay, today)) {
            result = (
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
          } else {
            result = (
              <Day
                isCurrentMonth={isSameMonth(currentDay, today)}
                isInRange={isWithinInterval(currentDay, reservationRange)}
                isReserved={
                  isSameDay(firstReservation as Date, currentDay) ||
                  isSameDay(lastReservation as Date, currentDay)
                }
                after={
                  (lastReservation as Date) &&
                  isAfter(lastReservation as Date, lastDayOfThisMonth) &&
                  isAfter(currentDay, firstReservation as Date)
                }
                before={
                  (lastReservation as Date) &&
                  isBefore(firstReservation as Date, firstDayOfThisMonth) &&
                  isBefore(currentDay, lastReservation as Date)
                }
              />
            );
          }
          return result;
        })}
      </Week>
    );
  });
  return (
    <CalendarBox>
      <h1>{format(today, 'yyyy년 MM월')}</h1>
      {calendarShape}
    </CalendarBox>
  );
}

export default Calendar;

const Day = styled.div<{
  isCurrentMonth?: boolean;
  isInRange?: boolean;
  isReserved?: boolean;
  after?: boolean;
  before?: boolean;
}>`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: ${({ isInRange, isReserved, isCurrentMonth, after, before }) =>
    // eslint-disable-next-line no-nested-ternary
    isCurrentMonth
      ? isInRange
        ? isReserved
          ? 'skyblue'
          : 'tomato'
        : isReserved
        ? 'skyblue'
        : 'transparent'
      : after
      ? 'tomato'
      : before
      ? 'tomato'
      : 'transparent'};
  cursor: pointer;
`;

const Week = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  border: 1px solid black;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
