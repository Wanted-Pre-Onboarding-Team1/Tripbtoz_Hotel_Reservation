enum Path {
  main = '/',
  detail = '/detail',
  bookings = '/bookings',
  upcoming = '/bookings/upcoming',
  canceled = '/bookings/canceled',
  past = '/bookings/past',
}

export const bookingPaths: string[] = [
  Path.bookings,
  Path.upcoming,
  Path.canceled,
  Path.past,
];

export default Path;
