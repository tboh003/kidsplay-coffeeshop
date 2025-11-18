export interface Product {
  id: string;
  icon: string; // emoji or icon identifier
  price: number; // Price in CZK
  category: string; // Product category for grouping
  name?: string; // Internal only, not displayed
}
