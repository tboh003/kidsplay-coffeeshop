import { Customer } from '../types';

// Available customer icons for selection
export const availableCustomerIcons = [
  { icon: '👦', name: 'Boy' },
  { icon: '👧', name: 'Girl' },
  { icon: '🧒', name: 'Child' },
  { icon: '🐶', name: 'Dog' },
  { icon: '👶', name: 'Baby' }
];

// No initial customers - game starts with empty list
export const initialCustomers: Customer[] = [];
