import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { palette } from 'lib/palette';

function ReservationMenu() {
  return (
    <MenuBlock>
      <MenuDivStyled>
        <button type="button">
          <BsArrowLeft />
        </button>
        <h1>예약내역</h1>
      </MenuDivStyled>
      <MenuUListStyled>
        <MenuListStyled>예정된 예약</MenuListStyled>
        <MenuListStyled>취소된 예약</MenuListStyled>
        <MenuListStyled>투숙 완료</MenuListStyled>
      </MenuUListStyled>
    </MenuBlock>
  );
}

export default ReservationMenu;

const BasicBlock = styled.section`
  /* flex: 1; */
  min-width: 250px;
  height: 170px;
  padding: 10px 0;
  background-color: ${palette.backgroundColor};

  @media (max-width: 1023px) {
    width: 770px;
    padding: 0;
  }
`;

const MenuBlock = styled(BasicBlock)`
  margin-right: 30px;
  @media (max-width: 1023px) {
    margin: 0;
    height: max-content;
  }
`;

const MenuDivStyled = styled.div`
  display: none;
  position: relative;
  height: 60px;
  border-bottom: 4px solid ${palette.statusPageBackground};

  button {
    position: absolute;
    width: 60px;
    height: 60px;
    font-size: 25px;
  }

  h1 {
    width: 100%;
    padding-top: 20px;
    text-align: center;
    font-size: 19px;
  }

  @media (max-width: 1023px) {
    display: flex;
  }
`;

const MenuUListStyled = styled.ul`
  width: 100%;
  height: 100%;

  @media (max-width: 1023px) {
    display: flex;
  }
`;

const MenuListStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  padding-left: 25px;
  background-color: ${palette.backgroundColor};
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.3s linear;

  :hover {
    filter: brightness(0.98);
  }

  @media (max-width: 1023px) {
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    border-bottom: 2px solid ${palette.statusPageBackground};
    padding-bottom: 10px;
    color: ${palette.disabledFontColor};

    :hover {
      filter: none;
    }
  }
`;
