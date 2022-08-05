import { Layout } from 'calender/JihoCalender/MyCalender';
import { palette } from 'lib/palette';
import { FlexBetween, FlexCenter } from 'lib/styles/commonStyles';
import React from 'react';
import styled from 'styled-components';

function PersonBox() {
  return (
    <PersonLayout>
      객실
      <hr />
      <LabelStyled>
        <div>성인</div>
        <FlexBetween>
          <ButtonStyled>-</ButtonStyled>
          <ButtonTextStyled>1</ButtonTextStyled>
          <ButtonStyled>+</ButtonStyled>
        </FlexBetween>
      </LabelStyled>
      <hr />
      <LabelStyled>
        <div>
          <div>아이</div>
          <div>(0~17세)</div>
        </div>
        <FlexBetween>
          <ButtonStyled>-</ButtonStyled>
          <ButtonTextStyled>1</ButtonTextStyled>
          <ButtonStyled>+</ButtonStyled>
        </FlexBetween>
      </LabelStyled>
    </PersonLayout>
  );
}

const PersonLayout = styled(Layout)`
  width: 480px;
  right: 0;
  left: none;
`;
const LabelStyled = styled(FlexBetween)`
  height: 24px;
  padding: 24px 0;
  color: ${palette.grayTextColor};
`;

const ButtonStyled = styled(FlexCenter)`
  height: 24px;
  width: 24px;
  border: 1px solid ${palette.grayTextColor}; ;
`;

const ButtonTextStyled = styled(FlexCenter)`
  width: 50px;
`;

export default PersonBox;
