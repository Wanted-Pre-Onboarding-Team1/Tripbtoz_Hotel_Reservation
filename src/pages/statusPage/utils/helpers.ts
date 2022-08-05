export const switchParams = (headerString: string) => {
  switch (headerString) {
    case '예정된 예약':
      return '/bookings/upcoming';
    case '취소된 예약':
      return '/bookings/canceled';
    case '투숙 완료':
      return '/bookings/past';
    default:
      return '/bookings';
  }
};

interface StringSets {
  upcomings: string[];
  cancels: string[];
  pasts: string[];
}

export const returnNoResult = (
  locationString: string,
  stringSets: StringSets,
) => {
  const { upcomings, cancels, pasts } = stringSets;
  switch (locationString) {
    case '/bookings':
    case '/bookings/upcoming':
      return upcomings;
    case '/bookings/canceled':
      return cancels;
    case '/bookings/past':
      return pasts;
    default:
      return ['오류가 발생했습니다'];
  }
};

export const classifyListItems = (
  hotelList: any[],
  switchTarget: string,
  filterCondition: (dateString: string, todayDate: Date) => boolean,
) => {
  let result = [];
  const today = new Date();
  switch (switchTarget) {
    case '/bookings/canceled':
      result = hotelList.filter((listItem: any) => listItem[3].canceled);
      break;
    case '/bookings/past':
      result = hotelList.filter((listItem: any) => {
        return filterCondition(listItem[1].checkout, today) || listItem[4].past;
      });
      break;
    default:
      result = hotelList.filter(
        (listItem: any) => !listItem[3].canceled && !listItem[4].past,
      );
      break;
  }
  return result;
};
