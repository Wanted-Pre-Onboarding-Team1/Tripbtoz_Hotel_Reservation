import React from 'react';
import { isSameDay, isBefore } from 'date-fns';

export const useReservation = () => {
  const [firstReservation, setFirstReservation] = React.useState<Date | null>(
    null,
  );
  const [lastReservation, setLastReservation] = React.useState<Date | null>(
    null,
  );
  const [reservationRange, setReservationRange] = React.useState<Interval>({
    start: Date.parse('0'),
    end: Date.parse('0'),
  });

  const setReservationDay = (currentDay: Date) => {
    switch (true) {
      case firstReservation == null:
        setFirstReservation(currentDay);
        break;
      case firstReservation != null && lastReservation == null:
        switch (true) {
          case isSameDay(currentDay, firstReservation as Date):
            break;
          case !isBefore(currentDay, firstReservation as Date):
            setLastReservation(currentDay);
            setReservationRange((previousRange) => {
              return {
                ...previousRange,
                start: firstReservation as Date,
                end: currentDay,
              };
            });
            break;
          default:
            setFirstReservation(currentDay);
            break;
        }
        break;
      default:
        setFirstReservation(currentDay);
        setLastReservation(null);
        setReservationRange((previousRange) => {
          return {
            ...previousRange,
            start: Date.parse('0'),
            end: Date.parse('0'),
          };
        });
        break;
    }
  };

  return {
    firstReservation,
    lastReservation,
    reservationRange,
    setReservationDay,
  };
};
