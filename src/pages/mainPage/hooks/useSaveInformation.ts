import React, { useState } from 'react';

export default function useSaveInformation(
  hotelname: any,
  person: any,
  date: any,
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
