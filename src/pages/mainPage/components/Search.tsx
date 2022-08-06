import MainCalender from 'calender/JihoCalender/MainCalender';
import { addDays, differenceInDays, format, startOfToday } from 'date-fns';
import useOutSideClick from 'hooks/useOutsideClick';
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
  const today = startOfToday();
  const [params, setParams] = React.useState({
    title: '',
    person: 2,
    date: { checkin: addDays(today, 7), checkout: addDays(today, 8) },
  });
  const onChangeParams = (name: string, value: any) => {
    setParams({ ...params, [name]: value });
  };

  const onChangeDateOfParams = (name: string, value: any) => {
    setParams((prev) => ({ ...prev, date: { ...prev.date, [name]: value } }));
  };

  const [isCalender, onToggleIsCalender] = useToggle(params);
  const [isPerson, onToggleIsPerson] = useToggle();
  const [targetCalender] = useOutSideClick(isCalender, onToggleIsCalender);
  const { checkin, checkout } = params.date;
  return (
    <SearchSection>
      <SearchBox>
        <HotelNameBox>
          <SearchIcon size={38} />
          <HotelNameInput
            type="text"
            placeholder="호텔명 검색"
            value={params.title}
            onChange={(e) => onChangeParams('title', e.target.value)}
          />
        </HotelNameBox>
        <CheckInBox onClick={onToggleIsCalender} ref={targetCalender}>
          <CalendarIcon size={38} />
          <CheckInOutStyled>
            <div>
              <DateLabel>체크인</DateLabel>
              <CheckDay>
                {format(params.date.checkin, 'MM월dd일')}{' '}
                <Br>
                  <br />
                </Br>
              </CheckDay>
            </div>
            <DateLabel>
              {checkin &&
                checkout &&
                differenceInDays(checkout, checkin as Date)}
              박
            </DateLabel>
            <div>
              <DateLabel>체크아웃</DateLabel>
              <CheckDay>{checkout && format(checkout, 'MM월dd일')}</CheckDay>
            </div>
          </CheckInOutStyled>
        </CheckInBox>
        <ToggleDiv isToggle={isCalender}>
          <MainCalender
            onChangeDateOfParams={onChangeDateOfParams}
            params={params}
          />
        </ToggleDiv>
        <RoomPersonBox onClick={onToggleIsPerson}>
          <PersonIcon size={38} />
          <RoomPersonStyled>
            <DateLabel>객실 / 인원</DateLabel>
            <div>
              객실 1,
              <Br>
                <br />
              </Br>
              인원 {params.person}
            </div>
          </RoomPersonStyled>
        </RoomPersonBox>
        <ToggleDiv isToggle={isPerson}>
          <PersonBox
            onChangeParams={onChangeParams}
            params={params}
            onClose={onToggleIsPerson}
          />
        </ToggleDiv>
        <SubmitStyled>
          <a
            href={`/?title=${params.title}&person=${params.person}&start=${params.date.checkin}&end=${params.date.checkout}`}
          >
            <SubmitIcon size={38} />
          </a>
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
    width: 100%;
    margin: 0;
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
    align-items: center;
    padding-left: 7px;
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

const CheckDay = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
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
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
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
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding-right: 5px;
  }
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

const ToggleDiv = styled.div<{ isToggle: boolean }>`
  display: ${({ isToggle }) => (isToggle ? 'block' : 'none')};
`;

const Br = styled.span`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
  }
`;
export default Search;
