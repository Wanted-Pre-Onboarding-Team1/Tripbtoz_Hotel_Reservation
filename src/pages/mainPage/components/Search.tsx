import MyCalender from 'calender/JihoCalender/MyCalender';
import { palette } from 'lib/palette';
import { FlexBetween, FlexCenter } from 'lib/styles/commonStyles';
import React from 'react';
import {
  AiOutlineCalendar,
  AiOutlineSearch,
  AiOutlineTeam,
} from 'react-icons/ai';
import styled from 'styled-components';
import useToggle from '../hooks/useToggle';
import PersonBox from './PersonBox';

function Search() {
  const [isCalender, onToggleIsCalender] = useToggle();
  const [isPerson, onToggleIsPerson] = useToggle();

  return (
    <SearchSection>
      <SearchBox>
        <HotelNameBox>
          <SearchIcon size={38} />
          <HotelNameInput type="text" placeholder="호텔명 검색" />
        </HotelNameBox>
        <CheckInBox onClick={onToggleIsCalender}>
          <CalendarIcon size={38} />
          <CheckInOutStyled>
            <div>
              <DateLabel>체크인</DateLabel>
              <div>8월 15일</div>
            </div>
            <DateLabel>5박</DateLabel>
            <div>
              <DateLabel>체크아웃</DateLabel>
              <div>8월 15일</div>
            </div>
          </CheckInOutStyled>
        </CheckInBox>
        {isCalender && (
          <div>
            <MyCalender />
          </div>
        )}
        <RoomPersonBox onClick={onToggleIsPerson}>
          <PersonIcon size={38} />
          <RoomPersonStyled>
            <DateLabel>객실 / 인원</DateLabel>
            <div>객실 1, 인원 2</div>
          </RoomPersonStyled>
        </RoomPersonBox>
        {isPerson && (
          <div>
            <PersonBox />
          </div>
        )}
        <SubmitStyled>
          <SubmitIcon size={38} />
        </SubmitStyled>
      </SearchBox>
    </SearchSection>
  );
}

const SearchSection = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 16px auto 8px auto;
  padding: 0 48px;
  font-size: 16px;
  font-weight: 700;
  @media screen and (max-width: 480px) {
    width: 90%;
    padding: 0;
  }
`;
const SearchBox = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid ${palette.subTextColor};
  border-radius: 4px;
  height: 58px;
  display: flex;
  @media screen and (max-width: 480px) {
    border: transparent;
    background-color: inherit;
  }
`;

const HotelNameBox = styled.div`
  border-right: 1px solid ${palette.subTextColor};
  display: flex;
  align-items: center;
  position: relative;
  vertical-align: center;
  flex: 1 1 0%;
  @media screen and (max-width: 480px) {
    justify-content: center;
    width: 50%;
    height: max-content;
    border: 1px solid gray;
    border-radius: 15px;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  padding: 4px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const HotelNameInput = styled.input`
  font-size: 18px;
  padding: 8px;
  font-weight: 700;
  @media screen and (max-width: 480px) {
    width: 90%;
    background-color: inherit;
    font-size: 14px;
  }
`;

const CheckInBox = styled(FlexCenter)`
  position: relative;
  border-right: 1px solid black;
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
  flex: 0 1 30%;
`;

const DateLabel = styled.div`
  font-size: 14px;
  color: ${palette.subTextColor};
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const CalendarIcon = styled(AiOutlineCalendar)`
  padding: 4px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const CheckInOutStyled = styled(FlexBetween)`
  flex: 1 1;
`;

const RoomPersonBox = styled(FlexCenter)`
  position: relative;
  flex: 0 1 20%;
`;

const PersonIcon = styled(AiOutlineTeam)`
  padding: 4px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const RoomPersonStyled = styled.div`
  padding: 16px;
  flex: 1 1;
`;

const SubmitIcon = styled(AiOutlineSearch)`
  color: white;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const SubmitStyled = styled.div`
  padding: 10px 20px 10px 20px;
  background-color: ${palette.pointColor};
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export default Search;
