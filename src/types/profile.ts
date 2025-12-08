export type UserType = 'passenger' | 'driver';

export interface User {
  id: string;
  name: string;
  avatar: string;
  type: UserType;
  subinfo: string;
}

export interface RideHistory {
  id: string;
  otherUserName: string;
  otherUserAvatar: string;
  date: string;
  time: string;
  origin: string;
  destination: string;
  car?: string;
  carColor?: string;
  plate?: string;
  paymentMethod?: string;
}