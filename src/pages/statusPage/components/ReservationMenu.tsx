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
  border-bottom: 4px solid ${palette.grayBackgroundColor};

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
  width: 100%;
  height: 50px;
  font-size: 16px;
  transition: filter 0.3s linear;

  .active {
    border-left: 4px solid ${palette.borderHighlightColor};
    padding-left: 21px;
    background-color: ${palette.highlightBackgroundColor};
    color: ${palette.borderHighlightColor};

    :hover {
      filter: none;
    }
  }

  @media (max-width: 480px) {
    .active {
      border-left: none;
      border-bottom: 2px solid black;
      padding: 0;
      background: none;
      font-weight: 700;
      color: black;
    }
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 25px;
  transition: filter 0.3s ease;

  :hover {
    filter: brightness(0.98);
  }

  @media (max-width: 480px) {
    justify-content: center;
    padding-left: 0;
    color: ${palette.disabledFontColor};

    :hover {
      filter: none;
    }
  }
`;
