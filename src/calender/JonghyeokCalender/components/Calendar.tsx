import React from 'react';
import {
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { addDays } from 'date-fns/esm';
import styled from 'styled-components';

export function Calendar({ currentMonth }: any) {
  const monthStart = startOfMonth(currentMonth);
  // 오늘이 속한 달의 시작 일
  const monthEnd = endOfMonth(monthStart);
  // 오늘이 속한 달의 마지막 일
  const startDate = startOfWeek(monthStart);
  // monthStart가 속한 주의 시작일
  const endDate = endOfWeek(monthEnd);
  // monthEnd가 속한 주의 마지막일

  const month = [];
  // 한달의 배열 4나5주를 가짐
  let week = [];
  // 한주의 배열 7일 한 주를 가짐
  let day = startDate;
  let formattedDate = '';
  // 빈 문자열을 가지고 있다 push되는 format(day, 'd')속성을 가지고 날짜를 표시함

  while (day <= endDate) {
    for (let i = 0; i < 7; i += 1) {
      formattedDate = format(day, 'd');
      week.push(<StyledDay>{formattedDate}</StyledDay>);
      day = addDays(day, 1);
    }
    month.push(<StyledWeek>{week}</StyledWeek>);
    week = [];
  }
  return <StyledMonth>{month}</StyledMonth>;
}

const StyledDay = styled.span`
  flex: 1;
  padding: 10px;
`;

const StyledWeek = styled.div`
  display: flex;
`;

const StyledMonth = styled.div`
  flex: 1;
`;
