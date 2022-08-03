import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { palette } from 'lib/palette';

function ReservationMenu() {
  return (
    <MenuBlock>
      <MenuDivStyled>
        <MenuButtonStyled type="button">
          <BsArrowLeft />
        </MenuButtonStyled>
        <MenuH1Styled>예약내역</MenuH1Styled>
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
  min-width: 250px;
  height: 170px;
  padding: 10px 0;
  background-color: ${palette.backgroundColor};

  @media (max-width: 1023px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
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

  @media (max-width: 1023px) {
    display: flex;
  }

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 17vw;
  }
`;

const MenuButtonStyled = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  font-size: 25px;

  @media (max-width: 767px) {
    left: 0;
    width: 17vw;
    height: 17vw;
    font-size: 7vw;
  }
`;

const MenuH1Styled = styled.h1`
  width: 100%;
  padding-top: 20px;
  text-align: center;
  font-size: 19px;

  @media (max-width: 767px) {
    padding-top: 0;
    font-size: 5vw;
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
    padding-left: 0;
    padding-bottom: 10px;
    color: ${palette.disabledFontColor};

    :hover {
      filter: none;
    }
  }

  @media (max-width: 767px) {
    align-items: center;
    height: 13vw;
    padding-bottom: 0;
    font-size: 4vw;
  }
`;
