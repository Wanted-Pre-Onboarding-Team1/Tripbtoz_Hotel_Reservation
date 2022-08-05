export type hotelListType = {
  hotel_name: string;
  occupancy: {
    base: number;
    max: number;
  };
};

export type PossiblePropertyValues = string | number | boolean;

export type PossiblePropertyKeys =
  | 'hotelname'
  | 'date'
  | 'person'
  | 'canceled'
  | 'past';

export type PossibleDateKeys = 'checkin' | 'checkout';

export interface HotelObjectProperty {
  [key: string]: string | number | boolean;
}

export type HotelObject = Record<string, string>;
