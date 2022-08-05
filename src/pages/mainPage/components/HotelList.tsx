import React from 'react';
import styled from 'styled-components';
import { hotelListType } from 'types/hotelList';
import SaveButton from './SaveButton';

function HotelList({ value, person }: any) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const imageObject = new Image();
    imageObject.src = 'https://source.unsplash.com/collection/3989638/200*300';
    imageObject.onload = () => {
      setIsLoading(false);
    };
  }, ['https://source.unsplash.com/collection/3989638/200*300']);

  return (
    <div>
      {!isLoading && (
        <StyledList>
          <StyledArticle>
            <Styledimg
              src="https://source.unsplash.com/collection/3989638/200*300"
              alt="hotel"
            />
            <StyledTitle>
              <StyledGrade>5.0성급</StyledGrade>
              <StyledName>{value.hotel_name}</StyledName>
              <StyledOccupancy>
                기준{value.occupancy.base}인 | 최대{value.occupancy.max}인
              </StyledOccupancy>
            </StyledTitle>
            <StyledPrice>
              <SaveButton hotelName={value.hotel_name} person={person} />
            </StyledPrice>
          </StyledArticle>
        </StyledList>
      )}
    </div>
  );
}

export default HotelList;

const StyledList = styled.section`
  width: 60%;
  margin: 0 auto;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  width: 100%;
  height: 20%;
  margin-bottom: 10px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  transition: all 0.5s;
  :hover {
    box-shadow: 2px 3px 5px 5px #f3f3f3;
  }
`;

const StyledTitle = styled.div`
  flex: 1;
  margin: 20px 0 0 20px;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const Styledimg = styled.img`
  width: 30%;
  height: 215px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    display: none;
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
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const StyledName = styled.div`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const StyledOccupancy = styled.div`
  color: gray;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 20px;
  }
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
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const StyledTex = styled.div`
  margin-top: 10px;
  font-size: 0.7rem;
  color: gray;
  @media screen and (max-width: 480px) {
    font-size: 0.4rem;
  }
`;
