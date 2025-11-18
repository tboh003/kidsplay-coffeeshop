import { Customer } from '../types';
import { LANGUAGE } from '../constants/language';

// Available customer icons for selection
export const availableCustomerIcons = [
  { icon: '👦', name: LANGUAGE.CUSTOMER_BOY },
  { icon: '👧', name: LANGUAGE.CUSTOMER_GIRL },
  { icon: '🧒', name: LANGUAGE.CUSTOMER_CHILD },
  { icon: '🐶', name: LANGUAGE.CUSTOMER_DOG },
  { icon: '👶', name: LANGUAGE.CUSTOMER_BABY }
];

// No initial customers - game starts with empty list
export const initialCustomers: Customer[] = [];
