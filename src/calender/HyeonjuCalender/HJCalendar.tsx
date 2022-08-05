/* eslint-disable no-case-declarations */
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  isBefore,
  isAfter,
  isEqual,
} from 'date-fns';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import HJDateBox from './HJDateBox';

const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface CalendarProps {
  today: Date;
  onDateClick?: MouseEventHandler<HTMLTimeElement>;
  clickedDates?: (Date | null)[];
  showPrevMonth?: boolean;
  showNextMonth?: boolean;
  continuousStyling?: boolean;
}

export default function HJCalendar({
  today,
  onDateClick,
  clickedDates,
  showPrevMonth = true,
  showNextMonth = true,
  continuousStyling = true,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(today);
  const currentMonth = format(currentDate, 'MMM yyyy');

  const datesOfCurrentMonth = eachDayOfInterval({
    start: showPrevMonth
      ? startOfWeek(startOfMonth(currentDate))
      : startOfMonth(currentDate),
    end: showNextMonth
      ? endOfWeek(endOfMonth(currentDate))
      : endOfMonth(currentDate),
  });
  const firstDayOfCurrentMonth = datesOfCurrentMonth[0].getDay() + 1;

  const handleMonthChange: MouseEventHandler<HTMLButtonElement> = (event) => {
    const targetId = event.currentTarget.id;

    switch (targetId) {
      case 'previous_month':
        const previousMonth = addMonths(currentDate, -1);

        !isBefore(previousMonth, startOfMonth(today)) &&
          setCurrentDate(previousMonth);
        break;

      case 'next_month':
        const nextMonth = addMonths(currentDate, 1);

        !isAfter(nextMonth, addMonths(startOfMonth(today), 12)) &&
          setCurrentDate(nextMonth);
        break;
    }
  };

  return (
    <Calendar>
      <MonthBlock>
        <h2>{currentMonth}</h2>
        <div>
          <button
            type="button"
            id="previous_month"
            aria-label="previous month"
            onClick={handleMonthChange}
          >
            ◀️
          </button>
          <button
            type="button"
            id="next_month"
            aria-label="next month"
            onClick={handleMonthChange}
          >
            ▶️
          </button>
        </div>
      </MonthBlock>
      <DatesBlock>
        {WEEK.map((dayOfTheWeek, index) => (
          <WeekBox key={`week_${dayOfTheWeek}_${index}`}>
            {dayOfTheWeek}
          </WeekBox>
        ))}
        {datesOfCurrentMonth.map((date, index) => (
          <HJDateBox
            key={`date_${date}_${index}`}
            date={date}
            dateTime={format(date, 'yyyy MMM d')}
            currentDate={currentDate}
            onClick={onDateClick}
            style={{
              gridColumnStart: index === 0 ? firstDayOfCurrentMonth : '',
              background:
                continuousStyling && clickedDates && clickedDates.length === 2
                  ? (clickedDates
                      .map((clickedItem) =>
                        isEqual(date, clickedItem as Date) ||
                        (isAfter(date, clickedDates[0] as Date) &&
                          isBefore(date, clickedDates[1] as Date))
                          ? 'rgba(0,0,0,0.1)'
                          : '',
                      )
                      .find((item) => item === 'rgba(0,0,0,0.1)') as string)
                  : ((clickedDates as Date[])
                      .map((clickedItem) =>
                        isEqual(date, clickedItem as Date)
                          ? 'rgba(0,0,0,0.1)'
                          : '',
                      )
                      .find((item) => item === 'rgba(0,0,0,0.1)') as string),
            }}
          />
        ))}
      </DatesBlock>
    </Calendar>
  );
}

const Calendar = styled.section`
  width: 100%;
  max-width: 900px;
  padding: 1rem;
`;

const MonthBlock = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const DatesBlock = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  text-align: center;
`;

const WeekBox = styled.span`
  font-weight: 700;
`;
