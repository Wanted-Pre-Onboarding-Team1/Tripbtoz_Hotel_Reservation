import { palette } from 'lib/styles/palette';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Path from 'routes/Path';
import styled, { css } from 'styled-components';
import logo from 'assets/image/logo.png';

function Header() {
  const location = useLocation();
  const currentPagePath = location.pathname;

  return (
    <>
      <HeaderContainer>
        <InnerContainer>
          <LinkStyled to={Path.main} className="logo">
            <img src={logo} alt="tripbtoz logo" />
          </LinkStyled>
          {currentPagePath !== Path.bookings && (
            <LinkStyled to={Path.bookings} className="reservation">
              예약 확인
            </LinkStyled>
          )}
          {currentPagePath === Path.bookings && (
            <HeadingStyled>예약 내역</HeadingStyled>
          )}
        </InnerContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default Header;

const HeaderContainer = styled.header`
  padding: 0 48px;
  font-size: 1.2rem;
  border-bottom: 1px solid ${palette.hoverColor};
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 1rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LinkStyled = styled(Link)`
  padding: 16px 0;
  font-weight: 700;
  ${({ className }) =>
    className === 'reservation' &&
    css`
      border: 1px solid ${palette.pointColor};
      border-radius: 10px;
      padding: 16px;
      color: ${palette.pointColor};
      transition: all 250ms ease-in;
      :hover {
        background-color: ${palette.pointColor};
        color: ${palette.backgroundColor};
      }
    `}
  ${({ className }) =>
    className === 'logo' &&
    css`
      img {
        @media (max-width: 480px) {
          width: 80%;
        }
      }
    `}
`;

const HeadingStyled = styled.h2`
  padding: 16px;
`;
