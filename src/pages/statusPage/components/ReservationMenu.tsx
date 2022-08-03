import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { palette } from 'lib/styles/palette';
import { menus } from '../utils/constants';
import { switchParams } from '../utils/helpers';

function ReservationMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuButtons = menus.map((menuHeader: string, index: number) => {
    return (
      <MenuListStyled key={`${menuHeader}_${index}}`}>
        <NavLinkStyled
          to={switchParams(menuHeader)}
          className={
            location.pathname === '/bookings' && menuHeader[0] === '예'
              ? 'active'
              : ''
          }
        >
          {menuHeader}
        </NavLinkStyled>
      </MenuListStyled>
    );
  });

  const handleClick = React.useCallback(goMain, []);

  function goMain() {
    navigate('/');
  }

  return (
    <MenuBlock>
      <MenuDivStyled>
        <MenuButtonStyled type="button" onClick={handleClick}>
          <BsArrowLeft />
        </MenuButtonStyled>
        <MenuH1Styled>예약내역</MenuH1Styled>
      </MenuDivStyled>
      <MenuUListStyled>{menuButtons}</MenuUListStyled>
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
  border-bottom: 4px solid ${palette.grayBackgroundColor};

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
  height: 50px;
  background-color: ${palette.backgroundColor};
  font-size: 16px;

  .active {
    border-left: 4px solid ${palette.borderHighlightColor};
    padding-left: 21px;
    background-color: ${palette.highlightBackgroundColor};
    color: ${palette.borderHighlightColor};

    :hover {
      filter: none;
    }
  }

  @media (max-width: 1023px) {
    width: 100%;
    border-bottom: 2px solid ${palette.grayBackgroundColor};
    color: ${palette.disabledFontColor};

    .active {
      border-left: none;
      border-bottom: 2px solid black;
      padding-left: 0;
      padding-bottom: 8px;
      background-color: ${palette.backgroundColor};
      color: black;
    }
  }

  @media (max-width: 767px) {
    height: 13vw;
    padding-bottom: 0;
    font-size: 4vw;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 25px;
  background-color: ${palette.backgroundColor};
  transition: filter 0.3s ease;

  :hover {
    filter: brightness(0.98);
  }

  @media (max-width: 1023px) {
    justify-content: center;
    align-items: flex-end;
    padding-left: 0;
    padding-bottom: 10px;
    color: ${palette.disabledFontColor};

    :hover {
      filter: none;
    }
  }

  @media (max-width: 767px) {
    align-items: center;
  }
`;
