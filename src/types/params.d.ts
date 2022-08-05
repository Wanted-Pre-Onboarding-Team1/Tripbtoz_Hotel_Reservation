export interface IParam {
  title: string;
  person: number;
  date: {
    checkin: Date;
    checkout: Date | null;
  };
}
