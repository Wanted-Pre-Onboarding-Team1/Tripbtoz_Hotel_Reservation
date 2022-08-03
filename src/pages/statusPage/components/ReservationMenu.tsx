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
  height: 170px;
  padding: 10px 0;
  background-color: ${palette.backgroundColor};

  @media (max-width: 480px) {
    width: 100%;
    height: max-content;
    padding: 0;
  }
`;

const MenuBlock = styled(BasicBlock)`
  flex: 1;
  margin-right: 30px;

  @media (max-width: 480px) {
    flex: 0;
    margin: 0;
  }
`;

const MenuDivStyled = styled.div`
  display: none;
  position: relative;
  border-bottom: 4px solid ${palette.statusPageBackground};

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
  }
`;

const MenuButtonStyled = styled.button`
  position: absolute;
  font-size: 25px;

  @media (max-width: 480px) {
    top: calc(50% + 2px);
    left: 0;
    max-width: 60px;
    width: 17vw;
    max-height: 60px;
    height: 17vw;
    transform: translateY(-50%);
  }
`;

const MenuH1Styled = styled.h1`
  width: 100%;
  padding-top: 20px;
  text-align: center;
  font-size: 19px;

  @media (max-width: 480px) {
    padding-top: 0;
  }
`;

const MenuUListStyled = styled.ul`
  width: 100%;
  height: 100%;

  @media (max-width: 480px) {
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

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid ${palette.statusPageBackground};
    padding-left: 0;
    color: ${palette.disabledFontColor};

    :hover {
      filter: none;
    }
  }
`;
