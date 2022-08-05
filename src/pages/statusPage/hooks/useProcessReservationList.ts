import React from 'react';
import { isBefore } from 'date-fns';

const useProcessReservationList = (isReloadNeeded: boolean) => {
  const [totalHotelLists, setTotalLists] = React.useState<any[]>([]);
  React.useEffect(() => {
    const storagedList = Object.keys(localStorage).map((key: string) => {
      return JSON.parse(localStorage.getItem(key) as string);
    });
    storagedList.forEach((listItem: any, index: number) => {
      if (isBefore(new Date(listItem[1].checkout), new Date())) {
        localStorage.setItem(
          listItem[0].hotelname,
          JSON.stringify([
            ...storagedList[index].slice(0, storagedList[index].length - 1),
            { past: true },
          ]),
        );
      }
    });
    setTotalLists((previousList: any[]) =>
      previousList.slice(previousList.length).concat(storagedList),
    );
  }, [isReloadNeeded]);

  return { totalHotelLists };
};

export default useProcessReservationList;
