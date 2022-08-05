import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import saveLocalStorage from '../hooks/useSaveInformation';

type saveButton = {
  hotelName: string | any;
  person: number | any;
};

type onClickType = React.MouseEventHandler<HTMLButtonElement>;

export default function SaveButton({ hotelName, person }: any) {
  const onClickButton: onClickType = saveLocalStorage(hotelName, person);

  return (
    <ReservationButton type="button" onClick={onClickButton}>
      예약
    </ReservationButton>
  );
}

const ReservationButton = styled.button`
  font-size: 16px;
  min-width: 106px;
  height: 32px;
  margin: 30px;
  border-radius: 4px;
  color: white;
  background-color: ${palette.pointColor};
  cursor: pointer;
`;
