import HJCalendar from 'calender/HyeonjuCalender/HJCalendar';
import { addDays, isAfter, isBefore, parse, startOfDay } from 'date-fns';
import React, { MouseEventHandler } from 'react';

interface Reservation {
  checkin: Date;
  checkout: Date | null;
}

export default function Example() {
  const today = startOfDay(Date.now());

  const [reserveDate, setReserveDate] = React.useState<Reservation>({
    checkin: addDays(today, 7),
    checkout: addDays(today, 8),
  });
  const { checkin, checkout } = reserveDate;

  const handleDateClick: MouseEventHandler<HTMLTimeElement> = (event) => {
    const targetDateTime = event.currentTarget.dateTime;
    const clickedDate = parse(targetDateTime, 'yyyy MMM d', new Date());

    if (isBefore(clickedDate, today)) return;

    if (isBefore(clickedDate, checkin)) {
      setReserveDate({
        checkin: clickedDate,
        checkout: null,
      });
    }

    if (isAfter(clickedDate, checkin)) {
      checkout &&
        setReserveDate({
          checkin: clickedDate,
          checkout: null,
        });
      !checkout &&
        setReserveDate((previous) => ({
          checkin: previous.checkin,
          checkout: clickedDate,
        }));
    }
  };
  return (
    <div>
      <HJCalendar
        today={today}
        onDateClick={handleDateClick}
        clickedDates={[checkin, checkout]}
        showPrevMonth={false}
        continuousStyling
      />
    </div>
  );
}
