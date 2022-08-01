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
  isSameMonth,
} from 'date-fns';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
interface Reservation {
  checkin: Date;
  checkout: Date | null;
}

export default function HJCalendar() {
  const today = startOfDay(Date.now());
  const [currentDate, setCurrentDate] = React.useState(today);
  const [reserveDate, setReserveDate] = React.useState<Reservation>({
    checkin: addDays(today, 7),
    checkout: addDays(today, 8),
  });

  const currentMonth = format(currentDate, 'MMM yyyy');
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
          <strong key={`week_${dayOfTheWeek}_${index}`}>{dayOfTheWeek}</strong>
        ))}
        {datesOfCurrentMonth.map((date, index) => (
          <DateBox
            key={`date_${date}`}
            dateTime={format(date, 'yyyy MMM d')}
            style={{
              gridColumnStart: index === 0 ? firstDayOfCurrentMonth : '',
              background:
                isEqual(date, checkin) ||
                isEqual(date, checkout as Date) ||
                (isAfter(date, checkin) && isBefore(date, checkout as Date))
                  ? 'rgba(0,0,0,0.1)'
                  : '',
            }}
            onClick={handleDateClick}
          >
            <ButtonStyled
              type="button"
              style={{
                color: !isSameMonth(date, currentDate) ? 'gray' : '',
              }}
            >
              {format(date, 'd')}
            </ButtonStyled>
          </DateBox>
        ))}
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
  font-size: 1.4rem;
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

const ButtonStyled = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
