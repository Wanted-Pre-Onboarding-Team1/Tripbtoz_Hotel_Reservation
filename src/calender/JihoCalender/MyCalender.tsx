/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import {
  AiFillAlert as ChevronLeftIcon,
  AiFillAmazonCircle as ChevronRightIcon,
} from 'react-icons/ai';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isEqual,
  isSameDay,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import styled from 'styled-components';
import { palette } from 'lib/palette';

export default function MyCalender() {
  // 오늘
  const today = startOfToday();

  // 선택된날
  const [selectedDay, setSelectedDay] = useState<{
    startDay: Date | null;
    endDay: Date | null;
  }>({
    startDay: null,
    endDay: null,
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
    if (selectedDay.startDay === null)
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
              <ChevronLeftIcon size={15} />
            </button>
            <button onClick={nextMonth} type="button">
              <ChevronRightIcon size={15} />
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
                  isEqual(selectedDay.startDay as Date, day) ||
                  isEqual(selectedDay.endDay as Date, day)
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
          {selectedDay.startDay && format(selectedDay.startDay, 'MMM dd, yyy')}~
          {selectedDay.endDay && format(selectedDay.endDay, 'MMM dd, yyy')}
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
