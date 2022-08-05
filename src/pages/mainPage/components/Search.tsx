import MainCalender from 'calender/JihoCalender/MainCalender';
import { differenceInDays, format } from 'date-fns';
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
import { IParam } from 'types/params';
import useToggle from '../hooks/useToggle';
import PersonBox from './PersonBox';

interface SearchProps {
  onChangeDateOfParams: (name: string, value: any) => void;
  onChangeParams: (name: string, value: any) => void;
  params: IParam;
}

function Search({ onChangeParams, params, onChangeDateOfParams }: SearchProps) {
  const [isCalender, onToggleIsCalender] = useToggle();
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
            placeholder="지역명, 호텔명, 펜션명 검색"
            value={params.title}
            onChange={(e) => onChangeParams('title', e.target.value)}
          />
        </HotelNameBox>
        <CheckInBox onClick={onToggleIsCalender} ref={targetCalender}>
          <CalendarIcon size={38} />
          <CheckInOutStyled>
            <div>
              <DateLabel>체크인</DateLabel>
              <div>{format(params.date.checkin, 'MM월dd일')}</div>
            </div>
            <DateLabel>
              {checkin &&
                checkout &&
                differenceInDays(checkout, checkin as Date)}
              박
            </DateLabel>
            <div>
              <DateLabel>체크아웃</DateLabel>
              <div>{checkout && format(checkout, 'MM월dd일')}</div>
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
            <div>객실 1, 인원 {params.person}</div>
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
`;
const SearchBox = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid ${palette.subTextColor};
  border-radius: 4px;
  height: 58px;
  display: flex;
`;

const HotelNameBox = styled.div`
  border-right: 1px solid ${palette.subTextColor};
  display: flex;
  align-items: center;
  position: relative;
  vertical-align: center;
  flex: 1 1 0%;
`;

const SearchIcon = styled(AiOutlineSearch)`
  padding: 4px;
`;

const HotelNameInput = styled.input`
  font-size: 18px;
  padding: 8px;

  font-weight: 700;
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
`;

const CalendarIcon = styled(AiOutlineCalendar)`
  padding: 4px;
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
`;

const RoomPersonStyled = styled.div`
  padding: 16px;
  flex: 1 1;
`;

const SubmitIcon = styled(AiOutlineSearch)`
  color: white;
`;

const SubmitStyled = styled.div`
  padding: 10px 20px 10px 20px;
  background-color: ${palette.pointColor};
`;

const ToggleDiv = styled.div<{ isToggle: boolean }>`
  display: ${({ isToggle }) => (isToggle ? 'block' : 'none')};
`;
export default Search;
