import React from 'react';
import styled from 'styled-components';

function HotelList() {
  return (
    <StyledList>
      <StyledText>
        <StyledPoint>1,691</StyledPoint>개의 호텔 중 예약가능 호텔
        <StyledPoint>316</StyledPoint>개
      </StyledText>
      <StyledArticle>
        <Styledimg
          src="https://source.unsplash.com/collection/3989638/"
          alt="hotel"
        />
        <StyledTitle>
          <StyledGrade>5.0성급</StyledGrade>
          <StyledName>웨스틴 조선 서울</StyledName>
          <StyledOccupancy>기준 2인 | 최대 4인</StyledOccupancy>
        </StyledTitle>
        <StyledPrice>
          407,000원<StyledTex>세금 및 수수료 불포함</StyledTex>
        </StyledPrice>
      </StyledArticle>
    </StyledList>
  );
}

export default HotelList;

const StyledList = styled.section`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const StyledText = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 2px 3px 5px 0 #f3f3f3;
  font-size: 1.2rem;
`;

const StyledPoint = styled.span`
  font-weight: 500;
`;

const StyledArticle = styled.article`
  display: flex;
  width: 100%;
  height: 20%;
  margin-bottom: 10px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  :hover {
    box-shadow: 2px 3px 5px 3px #f3f3f3;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Styledimg = styled.img`
  width: 30%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const StyledTitle = styled.div`
  flex: 1;
  margin: 20px 0 0 20px;
  @media screen and (max-width: 480px) {
  }
`;

const StyledGrade = styled.div`
  width: max-content;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px 7px;
  font-size: 1rem;
  box-shadow: 0 1px 1px 0;
`;
const StyledName = styled.div`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
`;
const StyledOccupancy = styled.div`
  color: gray;
`;

const StyledPrice = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 20px 20px 0;
  font-weight: 500;
  font-size: 1.5rem;
  align-items: flex-end;
`;

const StyledTex = styled.div`
  margin-top: 10px;
  font-size: 0.7rem;
  color: gray;
`;
