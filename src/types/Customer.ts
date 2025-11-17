import { Product } from './Product';

export interface Customer {
  id: string;
  icon: string; // emoji or icon identifier
  name?: string; // Internal only, not displayed
  order: Product[];
}
