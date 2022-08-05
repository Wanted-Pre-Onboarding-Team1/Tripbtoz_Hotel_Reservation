# [Wanted Pre Onboarding FE 5th] 팀 과제 #  5

- 주제: 호텔 예약 사이트 (기업: 트립비토즈)

- 프로젝트 기간: 2022.08.01 ~ 2022.08.06

<br />

## **1. 팀원 소개 **

### # <a href="https://github.com/leejiho9898">이지호</a>
### # <a href="https://github.com/godcl1623">이치행<a>
### # <a href="https://github.com/devMarco14">임종혁</a>
### # <a href="https://github.com/HyeonJu-C">천현주</a>

<br />

## **2. 기술 스택**

`react` `type-script` `react-router-dom` `styled-components` `axios` `json server`

<br />

## **3. 프로젝트 소개**


<br />

## **4. 프로젝트 구조**

```
📦src
 ┣ 📂asstes
 ┃ ┗ 📂imgs
 ┃ ┃ ┣ 📜engall.png
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┗ 📜Header.tsx
 ┣ 📂database
 ┃ ┗ 📜database.json
 ┣ 📂hooks
 ┃ ┣ 📜httpRequest.ts
 ┃ ┗ 📜useScheduleForm.ts
 ┣ 📂libs
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜schedule.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📜Constants.ts
 ┣ 📂pages
 ┃ ┣ 📂addSchedulePage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AMPM.tsx
 ┃ ┃ ┃ ┣ 📜DayOfWeek.tsx
 ┃ ┃ ┃ ┣ 📜Option.tsx
 ┃ ┃ ┃ ┗ 📜SelectBox.tsx
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜AddSchedulePage.tsx
 ┃ ┗ 📂schedulePage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Dayslot.tsx
 ┃ ┃ ┃ ┗ 📜Timeslot.tsx
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useWeekList.ts
 ┃ ┃ ┗ 📜SchedulePage.tsx
 ┣ 📂routes
 ┃ ┣ 📜Path.ts
 ┃ ┗ 📜Routing.tsx
 ┣ 📂types
 ┃ ┣ 📜customTypes.d.ts
 ┃ ┣ 📜imgges.d.ts
 ┃ ┗ 📜schedule.d.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
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


<br />

## **7. 발생 에러**

```
```
<br />

## **8. 시간이 더 있으면 넣고 싶었던 기능**

<br />

## **9. 프로젝트 설치 · 실행 방법**

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

