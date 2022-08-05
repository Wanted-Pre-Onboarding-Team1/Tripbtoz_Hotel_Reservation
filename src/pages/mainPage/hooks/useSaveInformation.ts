import React, { useState } from 'react';

export default function useSaveInformation(
  hotelname: any,
  person: any,
  date: any,
) {
  const dateObject = { date };
  const personObject = { person };
  const saveLocalStorage = () => {
    const dataArray = [];
    dataArray.push(dateObject, personObject);
    localStorage.setItem(hotelname, JSON.stringify(dataArray));
  };
  return saveLocalStorage;
}
