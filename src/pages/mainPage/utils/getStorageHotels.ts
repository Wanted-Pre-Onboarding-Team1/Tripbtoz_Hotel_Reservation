/* eslint-disable no-plusplus */

import { isAfter, isBefore, isEqual } from 'date-fns';

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
        availableHotels =
            availableHotels?.filter((hotel) => (hotel.hotel_name !== reservedHotelNames[i])) as any[];
    }
    return availableHotels;
}
