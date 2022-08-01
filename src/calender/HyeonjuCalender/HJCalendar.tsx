/* eslint-disable no-case-declarations */
import {
  format,
  parse,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfDay,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  isBefore,
  isAfter,
  isEqual,
} from 'date-fns';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import HJDateBox from './HJDateBox';

const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
interface Reservation {
  checkin: Date;
  checkout: Date | null;
}

export default function HJCalendar() {
  const today = startOfDay(Date.now());

  const [currentDate, setCurrentDate] = React.useState(today);
  const currentMonth = format(currentDate, 'MMM yyyy');

  const [reserveDate, setReserveDate] = React.useState<Reservation>({
    checkin: addDays(today, 7),
    checkout: addDays(today, 8),
  });
  const { checkin, checkout } = reserveDate;

  const datesOfCurrentMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate)),
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
      checkout &&
        setReserveDate({
          checkin: clickedDate,
          checkout: null,
        });
      !checkout &&
        setReserveDate((previous) => ({
          checkin: previous.checkin,
          checkout: clickedDate,
        }));
    }
  };

  return (
    <CalendarContainer>
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
            key={`date_${date}`}
            date={date}
            dateTime={format(date, 'yyyy MMM d')}
            currentDate={currentDate}
            onClick={handleDateClick}
            style={{
              gridColumnStart: index === 0 ? firstDayOfCurrentMonth : '',
              background:
                isEqual(date, checkin) ||
                isEqual(date, checkout as Date) ||
                (isAfter(date, checkin) && isBefore(date, checkout as Date))
                  ? 'rgba(0,0,0,0.1)'
                  : '',
            }}
          />
        ))}
      </DatesBlock>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.section`
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
