import React, { useState } from 'react';

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
  const nameObject = { hotelname };
  const dateObject = { date };
  const personObject = { person };
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
