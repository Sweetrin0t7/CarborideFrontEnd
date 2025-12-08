import { User, RideHistory } from '@/types/profile';

export const passengerUser: User = {
  id: '1',
  name: 'Alan Santos',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  type: 'passenger',
  subinfo: 'Charqueadas',
};

export const driverUser: User = {
  id: '2',
  name: 'Ronaldo Silva',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  type: 'driver',
  subinfo: 'Disponível',
};

export const passengerRideHistory: RideHistory[] = [
  {
    id: '1',
    otherUserName: 'Ronaldo Silva',
    otherUserAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    date: '03/10/25',
    time: '11:25',
    origin: 'Charqueadas',
    destination: 'São Jerônimo',
    car: 'Onix',
    carColor: 'Prata',
    plate: 'ISH0E34',
  },
  {
    id: '2',
    otherUserName: 'Carlos Mendes',
    otherUserAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    date: '01/10/25',
    time: '08:15',
    origin: 'Charqueadas',
    destination: 'Porto Alegre',
    car: 'HB20',
    carColor: 'Branco',
    plate: 'ABC1D23',
  },
];

export const driverRideHistory: RideHistory[] = [
  {
    id: '1',
    otherUserName: 'Alan Santos',
    otherUserAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    date: '03/10/25',
    time: '11:25',
    origin: 'Charqueadas',
    destination: 'São Jerônimo',
    paymentMethod: 'Cartão de Crédito',
  },
  {
    id: '2',
    otherUserName: 'Fernanda Costa',
    otherUserAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    date: '02/10/25',
    time: '09:45',
    origin: 'Porto Alegre',
    destination: 'Charqueadas',
    paymentMethod: 'PIX',
  },
];