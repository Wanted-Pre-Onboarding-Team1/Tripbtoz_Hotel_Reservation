/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useCallback, useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import {
  addDays,
  addMonths,
  differenceInDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isWithinInterval,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import styled, { css } from 'styled-components';
import { palette } from 'lib/styles/palette';
import { FlexCenter } from 'lib/styles/commonStyles';
import { IParam } from 'types/params';

type BackgroundState = 'TRUE' | 'FALSE' | 'ONLY_LEFT' | 'ONLY_RIGHT';

interface ActiveDayPorps {
  isActive: boolean;
  isInMonth: boolean;
  giveBackground: BackgroundState;
}

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

interface MainCalenderProps {
  onChangeDateOfParams: (name: string, value: any) => void;
  params: IParam;
}

export default function MyCalender({
  onChangeDateOfParams,
  params,
}: MainCalenderProps) {
  const { checkin, checkout } = params.date;
  // 오늘
  const today = startOfToday();

  // 왼쪽에 뜰 month와 오른쪽에 뜰 month
  const [selectedMonth, setSelectedMonth] = useState({
    leftMonth: format(checkin, 'MMM-yyyy'),
    rightMonth: format(addMonths(checkin, 1), 'MMM-yyyy'),
  });

  // 각 표시된 달들의 1일
  const firstDayofMonth = {
    left: parse(selectedMonth.leftMonth, 'MMM-yyyy', new Date()),
    right: parse(selectedMonth.rightMonth, 'MMM-yyyy', new Date()),
  };

  // 선택된 달의 day들
  const days = {
    left: eachDayOfInterval({
      start: startOfWeek(firstDayofMonth.left),
      end: endOfWeek(endOfMonth(firstDayofMonth.left)),
    }),
    right: eachDayOfInterval({
      start: startOfWeek(firstDayofMonth.right),
      end: endOfWeek(endOfMonth(firstDayofMonth.right)),
    }),
  };

  const handelClickDay = (day: Date) => {
    if (isBefore(day, today)) return;
    if (checkin !== null && checkout !== null) {
      onChangeDateOfParams('checkin', day);
      onChangeDateOfParams('checkout', null);
      // setSelectedDay((prev) => ({ ...prev, checkin: day, checkout: null }));
    }

    if (checkout === null) {
      if (isBefore(day, checkin)) onChangeDateOfParams('checkin', day);
      // setSelectedDay((prev) => ({ ...prev, checkin: day }));
      if (isAfter(day, checkin)) onChangeDateOfParams('checkout', day);
      // setSelectedDay((prev) => ({ ...prev, checkout: day }));
    }
  };

  const handleMonth = (controlNumber: number) => {
    const firstDayNextMonth = addMonths(firstDayofMonth.left, controlNumber);
    setSelectedMonth({
      leftMonth: format(firstDayNextMonth, 'MMM-yyyy'),
      rightMonth: format(addMonths(firstDayNextMonth, 1), 'MMM-yyyy'),
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const giveBackground = useCallback(
    (date: Date): BackgroundState => {
      if (checkout === null) return 'FALSE';
      if (
        isWithinInterval(date, {
          start: checkin,
          end: checkout as Date,
        })
      ) {
        if (isEqual(date, checkin)) return 'ONLY_RIGHT';
        if (isEqual(date, checkout)) return 'ONLY_LEFT';
        return 'TRUE';
      }
      return 'FALSE';
    },
    [checkin, checkout],
  );

  return (
    <Layout>
      <FlexCenter>
        <CalenderMonthBox>
          <CalenderInfoBox>
            <button type="button" onClick={() => handleMonth(-1)}>
              <AiFillCaretLeft size={15} />
            </button>
            <MonthStyled>
              {format(firstDayofMonth.left, ' yyyy년 MM월')}
            </MonthStyled>
          </CalenderInfoBox>
          <WeekStyled>
            {WEEKDAYS.map((weekday, index) => (
              <div key={`week_${weekday}_${index}`}>{weekday}</div>
            ))}
          </WeekStyled>
          <DayStyled>
            {days.left.map((day, dayIdx) => (
              <ActiveDay key={day.toString()}>
                <BackgroundDay
                  giveBackground={giveBackground(day)}
                  isInMonth={isSameMonth(day, firstDayofMonth.left)}
                  isActive={
                    isEqual(checkin as Date, day) ||
                    isEqual(checkout as Date, day)
                  }
                >
                  <button
                    type="button"
                    onClick={() => handelClickDay(day)}
                    disabled={!isSameMonth(day, firstDayofMonth.left)}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </BackgroundDay>
              </ActiveDay>
            ))}
          </DayStyled>
        </CalenderMonthBox>
        <CalenderMonthBox>
          <CalenderInfoBox>
            <MonthStyled>
              {format(firstDayofMonth.right, ' yyyy년 MM월')}
            </MonthStyled>
            <button onClick={() => handleMonth(1)} type="button">
              <AiFillCaretRight size={15} />
            </button>
          </CalenderInfoBox>
          <WeekStyled>
            {WEEKDAYS.map((weekday, index) => (
              <div key={`week_${weekday}_${index}`}>{weekday}</div>
            ))}
          </WeekStyled>
          <DayStyled>
            {days.right.map((day, dayIdx) => (
              <ActiveDay key={day.toString()}>
                <BackgroundDay
                  giveBackground={giveBackground(day)}
                  isInMonth={isSameMonth(day, firstDayofMonth.right)}
                  isActive={
                    isEqual(checkin as Date, day) ||
                    isEqual(checkout as Date, day)
                  }
                >
                  <button
                    type="button"
                    onClick={() => handelClickDay(day)}
                    disabled={!isSameMonth(day, firstDayofMonth.right)}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </BackgroundDay>
              </ActiveDay>
            ))}
          </DayStyled>
        </CalenderMonthBox>
      </FlexCenter>
      <section>
        {checkin && format(checkin, 'MMM dd, yyy')}
        {differenceInDays(checkin, checkout as Date)}박
        {checkout && format(checkout, 'MMM dd, yyy')}
      </section>
    </Layout>
  );
}

export const Layout = styled.div`
  top: 60px;
  left: 200px;
  z-index: 9999;
  position: absolute;
  padding: 46px;
  background-color: white;
  width: 810px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const CalenderMonthBox = styled.div`
  width: 50%;
  padding: 0 16px;
`;

const CalenderInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MonthStyled = styled.div`
  font-size: 16px;
  height: 24px;
  flex: 1 1 auto;
  text-align: center;
`;

const WeekStyled = styled.div`
  display: grid;
  margin: 12px 0;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  text-align: center;
  font-size: 14px;
  color: rgb(141, 141, 141);
`;

const DayStyled = styled.div`
  display: grid;
  height: 240px;
  font-size: 14px;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  text-align: center;
`;

const ActiveDay = styled.div`
  height: 40px;
`;

const BackgroundDay = styled(FlexCenter)<ActiveDayPorps>`
  height: 30px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  ${({ giveBackground, isInMonth }) =>
    isInMonth && giveBackground === 'ONLY_LEFT'
      ? css`
          background: linear-gradient(
            to right,
            rgba(255, 55, 92, 0.2) 50%,
            rgb(255, 255, 255) 50%
          );
        `
      : isInMonth && giveBackground === 'ONLY_RIGHT'
      ? css`
          background: linear-gradient(
            to left,
            rgba(255, 55, 92, 0.2) 50%,
            rgb(255, 255, 255) 50%
          );
        `
      : isInMonth && giveBackground === 'TRUE'
      ? css`
          background: rgba(255, 55, 92, 0.2);
        `
      : ''};

  button {
    background-color: ${({ isActive, isInMonth }) =>
      isInMonth && isActive ? palette.pointColor : ''};
    border-radius: 100%;
    text-align: center;
    width: 30px;
    height: 30px;
    color: ${({ isInMonth }) => (isInMonth ? 'black' : 'rgb(184, 184, 184)')};
  }
  time {
    color: ${({ isActive, isInMonth }) =>
      isInMonth && isActive ? 'white' : ''};
  }
`;
