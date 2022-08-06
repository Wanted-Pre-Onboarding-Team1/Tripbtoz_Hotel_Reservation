import React, { useState } from 'react';
import { addDays } from 'date-fns';

interface DateObject {
  checkin: string;
  checkout: string;
}

export default function useSaveInformation(
  hotelname: string,
  person: number,
  date: DateObject,
  canceled: boolean,
  past: boolean,
) {
  const today = new Date();
  const nameObject = { hotelname };
  const dateObject = {
    date: date.checkin
      ? date
      : {
          checkin: addDays(today, 7),
          checkout: addDays(today, 8),
        },
  };
  const personObject = { person: person || 2 };
  const canceledObject = { canceled };
  const pastObject = { past };
  const saveLocalStorage = () => {
    const dataArray = [];
    dataArray.push(
      nameObject,
      dateObject,
      personObject,
      canceledObject,
      pastObject,
    );
    localStorage.setItem(hotelname, JSON.stringify(dataArray));
  };
  return saveLocalStorage;
}
