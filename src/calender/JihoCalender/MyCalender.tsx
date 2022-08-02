/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import {
  add,
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  isEqual,
  parse,
  startOfToday,
} from 'date-fns';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

interface ReservationDate {
  checkin: Date;
  checkout: Date | null;
}

export default function MyCalender() {
  // 오늘
  const today = startOfToday();

  // 선택된날
  const [selectedDay, setSelectedDay] = useState<ReservationDate>({
    checkin: addDays(today, 7),
    checkout: addDays(today, 8),
  });

  // 현재 달
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));

  // 이번달 1일
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const handelClickDay = (day: Date) => {
    if (selectedDay.checkin === null)
      setSelectedDay((prev) => ({ ...prev, startDay: day }));
    else setSelectedDay((prev) => ({ ...prev, endDay: day }));
  };

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  return (
    <CalenderLayout>
      <div>
        <div>
          <CalenderInfoBox>
            <MonthStyled>
              {format(firstDayCurrentMonth, ' yyyy년 MM월')}
            </MonthStyled>
            <button type="button" onClick={previousMonth}>
              <AiFillCaretLeft size={15} />
            </button>
            <button onClick={nextMonth} type="button">
              <AiFillCaretRight size={15} />
            </button>
          </CalenderInfoBox>
          <WeekStyled>
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </WeekStyled>
          <DayStyled>
            {days.map((day, dayIdx) => (
              <ActiveDay
                key={day.toString()}
                isActive={
                  isEqual(selectedDay.checkin as Date, day) ||
                  isEqual(selectedDay.checkout as Date, day)
                }
              >
                <button type="button" onClick={() => handelClickDay(day)}>
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
              </ActiveDay>
            ))}
          </DayStyled>
        </div>
        <section>
          {selectedDay.checkin && format(selectedDay.checkin, 'MMM dd, yyy')}~
          {selectedDay.checkout && format(selectedDay.checkout, 'MMM dd, yyy')}
        </section>
      </div>
    </CalenderLayout>
  );
}

const CalenderLayout = styled.div`
  padding: 16px;
  background-color: ${palette.hoverColor};
  width: 300px;
  margin: 0 auto;
`;

const CalenderInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MonthStyled = styled.div`
  font-weight: 700;
  font-size: 22px;
  flex: 1 1 auto;
`;

const WeekStyled = styled.div`
  display: grid;
  margin: 12px 0;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  text-align: center;
  font-size: 18px;
`;

const DayStyled = styled.div`
  display: grid;
  font-size: 16px;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  text-align: center;
`;

const ActiveDay = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? palette.pointColor : palette.hoverColor};
`;
