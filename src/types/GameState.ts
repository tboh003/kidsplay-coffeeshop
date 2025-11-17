import { Customer } from './Customer';
import { Product } from './Product';

export interface GameState {
  customers: Customer[];
  products: Product[];
  selectedCustomerId: string | null;
  maxCustomers: number;
}
