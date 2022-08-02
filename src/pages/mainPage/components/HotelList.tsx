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
        <Styledimg src="" />
        <StyledTitle>
          <div>5.0성급</div>
          <div>웨스틴 조선 서울</div>
          <div>중수 소공로 106 서울특별시</div>
          <div>
            *****
            <span>총 2,961건의 리뷰</span>
          </div>
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
  font-size: large;
`;

const StyledPoint = styled.span`
  font-weight: 500;
`;

const StyledArticle = styled.article`
  display: flex;
  width: 100%;
  height: 30%;
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
  flex: 1;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const StyledTitle = styled.div`
  flex: 2;
  @media screen and (max-width: 480px) {
  }
`;

const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  font-weight: 500;
  font-size: 25px;
  align-items: flex-end;
`;

const StyledTex = styled.div`
  font-size: 12px;
  color: gray;
`;
