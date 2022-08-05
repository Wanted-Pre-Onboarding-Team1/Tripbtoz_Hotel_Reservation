/* eslint-disable no-plusplus */

import { isAfter, isBefore, isEqual, parseJSON } from 'date-fns';

/* eslint-disable prettier/prettier */
export function getReservedHotels() {
    const storageItems = [];
    const reservenHotels = Object.keys(localStorage);

    for (let i = 0; i < reservenHotels.length; i++) {
        const hotel = reservenHotels[i];
        const value = localStorage.getItem(reservenHotels[i]) as string;
        storageItems.push({ [hotel]: JSON.parse(value) });
    }
    return storageItems;
}



export function getAvailableHotels(hotelList: any[], date: { checkin: Date, checkout: Date }) {
    const reservedHotels = getReservedHotels();
    const reservedHotelNames = reservedHotels?.map(
        (hotel: object) => Object.keys(hotel)[0],
    );
    let availableHotels = hotelList ? [...hotelList] : [];

    for (let i = 0; i < reservedHotelNames.length; i++) {
        const reserveDate = reservedHotels[i][reservedHotelNames[i]][0].date;
        const reservedHotel = reservedHotelNames[i];

        availableHotels = availableHotels?.filter((hotel) => {
            if (hotel.hotel_name !== reservedHotel) return true;
            return (
                // 사용자가 입력한 date와 local에 저장된 date 비교해서, 날짜가 겹치지 않았을 때에만 예약 가능 호텔 목록에 추가
                !(isAfter(date.checkin, parseJSON(reserveDate.checkin))
                    && isBefore(date.checkin, parseJSON(reserveDate.checkout))) &&
                !(isAfter(date.checkout, parseJSON(reserveDate.checkin))
                    && isBefore(date.checkout, parseJSON(reserveDate.checkout)))
                && !isEqual(date.checkin, parseJSON(reserveDate.checkin))
                && !isEqual(date.checkout, parseJSON(reserveDate.checkout))
            )

        })
    }
    return availableHotels;
}
