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
              type="button"
              style={{
                gridColumnStart: index === 0 ? firstDayOfSelectedMonth : '',
              }}
            >
              <time dateTime={format(date, 'yyyy MMM d')}>
                {format(date, 'd')}
              </time>
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

const DateBox = styled.button`
  text-align: center;
  padding: 0.5rem;
`;
