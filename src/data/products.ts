import { Product } from '../types';

export const products: Product[] = [
  // Hot drinks
  { id: 'p1', icon: '☕', price: 25, name: 'Espresso' },
  { id: 'p2', icon: '🍵', price: 20, name: 'Tea' },
  { id: 'p11', icon: '☕', price: 30, name: 'Cappuccino' },
  { id: 'p12', icon: '🍫', price: 28, name: 'Hot Chocolate' },
  
  // Cold drinks
  { id: 'p3', icon: '🥛', price: 15, name: 'Milk' },
  { id: 'p7', icon: '🧃', price: 8, name: 'Juice' },
  { id: 'p9', icon: '🥤', price: 10, name: 'Soda' },
  { id: 'p13', icon: '🍹', price: 22, name: 'Bubble Tea' },
  { id: 'p14', icon: '🍹', price: 18, name: 'Smoothie' },
  
  // Baked goods
  { id: 'p4', icon: '🧁', price: 20, name: 'Cupcake' },
  { id: 'p5', icon: '🥐', price: 18, name: 'Croissant' },
  { id: 'p6', icon: '🍩', price: 12, name: 'Donut' },
  { id: 'p8', icon: '🍰', price: 30, name: 'Cake Slice' },
  { id: 'p15', icon: '🍞', price: 16, name: 'Bread' },
  { id: 'p16', icon: '🥯', price: 14, name: 'Bagel' },
  { id: 'p17', icon: '🥨', price: 14, name: 'Pretzel' },
  
  // Snacks and treats
  { id: 'p18', icon: '🍪', price: 10, name: 'Cookie' },
  { id: 'p10', icon: '🍫', price: 15, name: 'Chocolate' },
  { id: 'p19', icon: '🍬', price: 5, name: 'Candy' },
  { id: 'p20', icon: '🥞', price: 24, name: 'Pancakes' }
];
