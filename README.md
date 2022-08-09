# [Wanted Pre Onboarding FE 5th] 팀 과제 #  5

- 주제: 호텔 예약 사이트 (기업: 트립비토즈)

- 프로젝트 기간: 2022.08.01 ~ 2022.08.06

<br />

## **1. 팀원 소개 **
### # <a href="https://github.com/chaengs">심채영</a>
```
- 예약 정보(호텔명, 숙박 기간, 인원 등)를 로컬스토리지에 저장
- react-toast 라이브러리로 토스트 메세지 구현
```
### # <a href="https://github.com/leejiho9898">이지호</a>
### # <a href="https://github.com/godcl1623">이치행<a>
### # <a href="https://github.com/devMarco14">임종혁</a>
### # <a href="https://github.com/HyeonJu-C">천현주</a>

<br />

## **2. 기술 스택**

`react` `type-script` `react-router-dom` `styled-components` `axios` `json server`

<br />

## **3. 프로젝트 소개**
![f74cb9d785841cfa](https://user-images.githubusercontent.com/99126860/183104618-3c399a8f-d18c-49da-9bca-cab25ac06365.jpg)
![스크린샷 2022-08-06 오전 10 29 13](https://user-images.githubusercontent.com/99126860/183228293-f16129ed-2514-4304-937f-179e2befc492.png)
![스크린샷 2022-08-06 오전 10 29 30](https://user-images.githubusercontent.com/99126860/183228295-70518dc6-d746-452e-8424-1676d7b30b92.png)

<br />

## **4. 프로젝트 구조**

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂image
 ┃ ┃ ┣ 📜hotel.jpg
 ┃ ┃ ┗ 📜logo.png
 ┣ 📂calender
 ┃ ┣ 📂ChaeyoungCalender
 ┃ ┃ ┗ 📜test.tsx
 ┃ ┣ 📂ChihangCalender
 ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂util
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜Calendar.tsx
 ┃ ┃ ┣ 📜CalendarLayout.tsx
 ┃ ┃ ┗ 📜test.tsx
 ┃ ┣ 📂HyeonjuCalender
 ┃ ┃ ┣ 📜Example.tsx
 ┃ ┃ ┣ 📜HJCalendar.tsx
 ┃ ┃ ┣ 📜HJDateBox.tsx
 ┃ ┃ ┗ 📜test.tsx
 ┃ ┣ 📂JihoCalender
 ┃ ┃ ┗ 📜MyCalender.tsx
 ┃ ┗ 📂JonghyeokCalender
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┃ ┗ 📜WEEK.ts
 ┃ ┃ ┃ ┗ 📜Calendar.tsx
 ┃ ┃ ┗ 📜Hyeok.tsx
 ┣ 📂components
 ┃ ┣ 📜DetailedHotelInfo.tsx
 ┃ ┗ 📜Header.tsx
 ┣ 📂database
 ┃ ┗ 📜database.json
 ┣ 📂hooks
 ┃ ┗ 📜useMediaQuery.ts
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜httpRequest.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜commonStyles.ts
 ┃ ┃ ┣ 📜globalStyles.ts
 ┃ ┃ ┗ 📜palette.ts
 ┃ ┗ 📜palette.ts
 ┣ 📂pages
 ┃ ┣ 📂detailPage
 ┃ ┃ ┗ 📜DetailPage.tsx
 ┃ ┣ 📂mainPage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜HotelList.tsx
 ┃ ┃ ┃ ┣ 📜PersonBox.tsx
 ┃ ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┃ ┗ 📜Spiner.ts
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useIntersertObserver.ts
 ┃ ┃ ┃ ┗ 📜useToggle.ts
 ┃ ┃ ┗ 📜MainPage.tsx
 ┃ ┗ 📂statusPage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜ReservationList.tsx
 ┃ ┃ ┃ ┗ 📜ReservationMenu.tsx
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┃ ┗ 📜helpers.ts
 ┃ ┃ ┗ 📜StatusPage.tsx
 ┣ 📂routes
 ┃ ┣ 📜Path.ts
 ┃ ┗ 📜Routing.tsx
 ┣ 📂types
 ┃ ┗ 📜image.d.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜robots.txt
```

<br />

## **5. 컨벤션**
### # [ESLint, Airbnb세팅] 
### # 협업을 위한 git 커밋 컨벤션 설정

| 커밋명   | 내용                                                   |
| -------- | ------------------------------------------------------ |
| feat     | 새로운 기능을 추가                                     |
| fix      | 버그 수정                                              |
| design   | CSS 등 사용자 UI 디자인 변경                           |
| docs     | 문서 생성, 추가, 수정(README.md)                       |
| refactor | 코드 리팩토링                                          |
| chore    | 간단한 코드 변경, 로직에 큰 영향을 주지 않는 작은 변경 |
| test     | 테스트 코드 추가 및 리팩토링                           |
| rename   | 파일 혹은 폴더명을 수정, 이동                          |
| !HOTFIX  | 치명적인 버그의 긴급한 수정                            |

<br />

## **6.구현된 기능**
- 캘린더 체크인, 아웃 선택/성인 기본2인 아동 0 선택
- 호텔명으로 검색
- 무한스크롤 한 페이지당 데이터 10개
- 예약 된 호텔은 검색 금지
- 호텔 예약 로컬에 저장
- 예약현황 페이지 예약취소 기능
- 모바일 반응형 적용(480px에 적용)

<br />

## **7. 발생 에러**

```
```
<br />

## **8. 프로젝트 설치 · 실행 방법**

### # 프로젝트 클론

```
$ git clone https://github.com/Wanted-Pre-Onboarding-Team1/Tripbtoz_Hotel_Reservation
```

### # 패키지 설치

```
$ yarn
```
### # json server 실행

```
$ yarn run server
```

### # develop 서버 실행

```
$ yarn start
```

### # branch에서 작업

```
$ git checkout -b feature/page
```

