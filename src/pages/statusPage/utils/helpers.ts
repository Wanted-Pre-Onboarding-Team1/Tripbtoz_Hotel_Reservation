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
