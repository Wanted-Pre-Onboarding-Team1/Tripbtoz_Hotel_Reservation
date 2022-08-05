import React from 'react';

type occupancyNumber = {
  person: number;
};

type information = {
  hotelname: string;
  occupancy: occupancyNumber;
};

export default function useSaveInformation(hotelname: any, person: any) {
  const personObject = { person };
  const saveLocalStorage = () => {
    localStorage.setItem(hotelname, JSON.stringify(personObject));
  };
  return saveLocalStorage;
}
