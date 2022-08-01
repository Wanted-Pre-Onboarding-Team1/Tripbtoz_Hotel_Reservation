/* eslint-disable no-case-declarations */
import {
  format,
  parse,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfDay,
  addDays,
  addMonths,
  isBefore,
  isAfter,
  isEqual,
} from 'date-fns';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function HJCalendar() {
  const today = startOfDay(Date.now());
  const [selectedMonth, setSelectedMonth] = React.useState(
    format(today, 'MMM yyyy'),
  );
  const [reserveDate, setReserveDate] = React.useState<{
    checkin: Date;
    checkout: Date | null;
  }>({
    checkin: addDays(today, 7),
    checkout: addDays(today, 8),
  });
  const { checkin, checkout } = reserveDate;

  const parsedSelectedMonth = parse(selectedMonth, 'MMM yyyy', new Date());

  const datesOfSelectedMonth = eachDayOfInterval({
    start: startOfMonth(parsedSelectedMonth),
    end: endOfMonth(parsedSelectedMonth),
  });

  const firstDayOfSelectedMonth = datesOfSelectedMonth[0].getDay() + 1;

  const handleMonthClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const targetId = event.currentTarget.id;

    switch (targetId) {
      case 'previous_month':
        const previousMonth = addMonths(parsedSelectedMonth, -1);

        !isBefore(previousMonth, startOfMonth(today)) &&
          setSelectedMonth(format(previousMonth, 'MMM yyyy'));
        break;

      case 'next_month':
        const nextMonth = addMonths(parsedSelectedMonth, 1);

        !isAfter(nextMonth, addMonths(startOfMonth(today), 12)) &&
          setSelectedMonth(format(nextMonth, 'MMM yyyy'));
        break;
    }
  };

  const handleDateClick: MouseEventHandler<HTMLTimeElement> = (event) => {
    const targetDateTime = event.currentTarget.dateTime;
    const clickedDate = parse(targetDateTime, 'yyyy MMM d', new Date());

    if (isBefore(clickedDate, today)) return;

    if (isBefore(clickedDate, checkin)) {
      setReserveDate({
        checkin: clickedDate,
        checkout: null,
      });
    }

    if (isAfter(clickedDate, checkin)) {
      if (checkout) {
        setReserveDate({
          checkin: clickedDate,
          checkout: null,
        });
        return;
      }
      setReserveDate((previous) => ({
        checkin: previous.checkin,
        checkout: clickedDate,
      }));
    }
  };

  return (
    <CalendarContainer>
      <MonthBlock>
        <h2>{selectedMonth}</h2>
        <div>
          <button
            type="button"
            id="previous_month"
            aria-label="previous month"
            onClick={handleMonthClick}
          >
            ⬅️
          </button>
          <button
            type="button"
            id="next_month"
            aria-label="next month"
            onClick={handleMonthClick}
          >
            ➡️
          </button>
        </div>
      </MonthBlock>
      <DatesBlock>
        {week.map((dayOfTheWeek, index) => (
          <strong key={`week_${dayOfTheWeek}_${index}`}>{dayOfTheWeek}</strong>
        ))}
        {datesOfSelectedMonth.map((date, index) => {
          return (
            <DateBox
              key={`date_${date}`}
              dateTime={format(date, 'yyyy MMM d')}
              style={{
                gridColumnStart: index === 0 ? firstDayOfSelectedMonth : '',
                background:
                  isEqual(date, checkin) ||
                  isEqual(date, checkout as Date) ||
                  (isAfter(date, checkin) && isBefore(date, checkout as Date))
                    ? 'blue'
                    : '',
              }}
              onClick={handleDateClick}
            >
              <button type="button">{format(date, 'd')}</button>
            </DateBox>
          );
        })}
      </DatesBlock>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.section`
  padding: 1rem;
  min-width: 480px;
  max-width: 900px;
`;

const MonthBlock = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const DatesBlock = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  text-align: center;
`;

const DateBox = styled.time`
  text-align: center;
  padding: 0.5rem;
  :hover {
    cursor: pointer;
  }
`;
