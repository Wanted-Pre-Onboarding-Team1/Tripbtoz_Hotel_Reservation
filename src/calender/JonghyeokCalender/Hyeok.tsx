import React from 'react';
import styled from 'styled-components';
import { Calendar } from './components/Calendar';
import { WEEK } from './components/utils/WEEK';

function Test() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  return (
    <StyledCalender>
      <StyledHeader>2022년 08월</StyledHeader>
      <StyledWeeks>
        {WEEK.map((index) => (
          <StyledWeek key={index}>{index}</StyledWeek>
        ))}
      </StyledWeeks>
      <StyledBody>
        <Calendar currentMonth={currentMonth} />
      </StyledBody>
    </StyledCalender>
  );
}

export default Test;

const StyledCalender = styled.div`
  width: 50%;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledWeeks = styled.div`
  display: flex;
`;

const StyledWeek = styled.div`
  flex: 1;
  padding: 10px;
  color: gray;
`;

const StyledBody = styled.div`
  display: flex;
`;
