import React, { MouseEventHandler } from 'react';
import { format, isSameMonth } from 'date-fns';
import styled from 'styled-components';

interface DateBoxProps {
  style?: {
    [key: string]: string | number;
  };
  dateTime: string;
  onClick?: MouseEventHandler<HTMLTimeElement>;
  date?: Date;
  currentDate?: Date;
}

export default function HJDateBox({
  onClick,
  date,
  dateTime,
  currentDate,
  style,
}: DateBoxProps) {
  return (
    <DateBoxContainer dateTime={dateTime} style={style} onClick={onClick}>
      <ButtonStyled
        type="button"
        style={{
          color: !isSameMonth(date as Date, currentDate as Date) ? 'gray' : '',
        }}
      >
        {format(date as Date, 'd')}
      </ButtonStyled>
    </DateBoxContainer>
  );
}

const DateBoxContainer = styled.time`
  padding: 0.5rem;
  text-align: center;
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
