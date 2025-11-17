export interface Product {
  id: string;
  icon: string; // emoji or icon identifier
  price: number; // Price in CZK
  name?: string; // Internal only, not displayed
}
