import { Layout } from 'calender/JihoCalender/MainCalender';
import { palette } from 'lib/palette';
import { FlexBetween, FlexCenter } from 'lib/styles/commonStyles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IParam } from 'types/params';

interface PersonBoxProps {
  onChangeParams: (name: string, value: any) => void;
  params: IParam;
  onClose: () => void;
}

function PersonBox({ onChangeParams, params, onClose }: PersonBoxProps) {
  const [adNumber, setAdNumber] = useState(2);
  const [chNumber, setChNumber] = useState(0);
  useEffect(() => {
    onChangeParams('person', adNumber + chNumber);
  }, [adNumber, chNumber]);

  return (
    <PersonLayout>
      객실
      <hr />
      <LabelStyled>
        <div>성인</div>
        <FlexBetween>
          <ButtonStyled onClick={() => setAdNumber(adNumber - 1)}>
            -
          </ButtonStyled>
          <ButtonTextStyled>{adNumber}</ButtonTextStyled>
          <ButtonStyled onClick={() => setAdNumber(adNumber + 1)}>
            +
          </ButtonStyled>
        </FlexBetween>
      </LabelStyled>
      <hr />
      <LabelStyled>
        <div>
          <div>아이</div>
          <div>(0~17세)</div>
        </div>
        <FlexBetween>
          <ButtonStyled onClick={() => setChNumber(chNumber - 1)}>
            -
          </ButtonStyled>
          <ButtonTextStyled>{chNumber}</ButtonTextStyled>
          <ButtonStyled onClick={() => setChNumber(chNumber + 1)}>
            +
          </ButtonStyled>
        </FlexBetween>
      </LabelStyled>
      <LabelStyled>
        <OKBtn type="button" onClick={onClose}>
          확인
        </OKBtn>
      </LabelStyled>
    </PersonLayout>
  );
}

const PersonLayout = styled(Layout)`
  width: 480px;
  right: 0;
  left: none;

  @media (max-width: 480px) {
    left: 0;
    width: 100vw;
  }
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

const OKBtn = styled.button`
  height: 24px;
  padding: 4px;
  display: flex;
  align-items: center;
  font-size: 700;
  color: ${palette.grayTextColor};
  border: 1px solid ${palette.grayTextColor};
`;
export default PersonBox;
