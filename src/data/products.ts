import { Product } from '../types';
import { LANGUAGE } from '../constants/language';

export const products: Product[] = [
  // Horké nápoje (Hot Drinks)
  { id: 'p1', icon: '☕', price: 25, category: LANGUAGE.CATEGORY_HOT_DRINKS, name: 'Espresso' },
  { id: 'p2', icon: '🍵', price: 20, category: LANGUAGE.CATEGORY_HOT_DRINKS, name: 'Čaj' },
  { id: 'p11', icon: '🥤', price: 30, category: LANGUAGE.CATEGORY_HOT_DRINKS, name: 'Cappuccino' },
  { id: 'p12', icon: '🍫', price: 28, category: LANGUAGE.CATEGORY_HOT_DRINKS, name: 'Horká čokoláda' },
  { id: 'p21', icon: '🥛', price: 32, category: LANGUAGE.CATEGORY_HOT_DRINKS, name: 'Latte' },
  { id: 'p22', icon: '🍶', price: 26, category: LANGUAGE.CATEGORY_HOT_DRINKS, name: 'Macchiato' },
  
  // Studené nápoje (Cold Drinks)
  { id: 'p3', icon: '🥛', price: 15, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Mléko' },
  { id: 'p7', icon: '🧃', price: 8, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Džus' },
  { id: 'p9', icon: '🥤', price: 10, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Limonáda' },
  { id: 'p13', icon: '🧋', price: 22, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Bubble Tea' },
  { id: 'p14', icon: '🍹', price: 18, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Smoothie' },
  { id: 'p23', icon: '🧊', price: 24, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Ledová káva' },
  { id: 'p24', icon: '🍋', price: 12, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Citronáda' },
  { id: 'p35', icon: '🍺', price: 20, category: LANGUAGE.CATEGORY_COLD_DRINKS, name: 'Kofola' },
  
  // Pečivo (Baked Goods)
  { id: 'p4', icon: '🧁', price: 20, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Košíček' },
  { id: 'p5', icon: '🥐', price: 18, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Croissant' },
  { id: 'p6', icon: '🍩', price: 12, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Kobliha' },
  { id: 'p8', icon: '🍰', price: 30, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Dort' },
  { id: 'p15', icon: '🥖', price: 16, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Bageta' },
  { id: 'p16', icon: '🥯', price: 14, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Bagel' },
  { id: 'p17', icon: '🥨', price: 14, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Preclík' },
  { id: 'p25', icon: '🧇', price: 22, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Vafle' },
  { id: 'p26', icon: '🥧', price: 28, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Koláč' },
  { id: 'p27', icon: '🥞', price: 24, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Palačinky' },
  { id: 'p33', icon: '🍞', price: 8, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Rohlík' },
  { id: 'p34', icon: '🥐', price: 15, category: LANGUAGE.CATEGORY_BAKED_GOODS, name: 'Houska' },
  
  // Slané jídlo (Savory)
  { id: 'p39', icon: '🥪', price: 35, category: LANGUAGE.CATEGORY_SAVORY, name: 'Chlebíček' },
  { id: 'p40', icon: '🍖', price: 28, category: LANGUAGE.CATEGORY_SAVORY, name: 'Sekaná' },
  { id: 'p41', icon: '🌭', price: 25, category: LANGUAGE.CATEGORY_SAVORY, name: 'Párek v rohlíku' },
  { id: 'p42', icon: '🥓', price: 22, category: LANGUAGE.CATEGORY_SAVORY, name: 'Slanina' },
  { id: 'p43', icon: '🍕', price: 32, category: LANGUAGE.CATEGORY_SAVORY, name: 'Langoš' },
  
  // Sladkosti (Sweets)
  { id: 'p18', icon: '🍪', price: 10, category: LANGUAGE.CATEGORY_SWEETS, name: 'Sušenka' },
  { id: 'p10', icon: '🍫', price: 15, category: LANGUAGE.CATEGORY_SWEETS, name: 'Čokoláda' },
  { id: 'p19', icon: '🍬', price: 5, category: LANGUAGE.CATEGORY_SWEETS, name: 'Bonbón' },
  { id: 'p28', icon: '🍦', price: 18, category: LANGUAGE.CATEGORY_SWEETS, name: 'Zmrzlina' },
  { id: 'p29', icon: '🍿', price: 8, category: LANGUAGE.CATEGORY_SWEETS, name: 'Popcorn' },
  { id: 'p30', icon: '🍭', price: 6, category: LANGUAGE.CATEGORY_SWEETS, name: 'Lízátko' },
  { id: 'p31', icon: '🎂', price: 35, category: LANGUAGE.CATEGORY_SWEETS, name: 'Narozeninový dort' },
  { id: 'p36', icon: '🍮', price: 16, category: LANGUAGE.CATEGORY_SWEETS, name: 'Pudink' },
  { id: 'p37', icon: '🥧', price: 18, category: LANGUAGE.CATEGORY_SWEETS, name: 'Štrúdl' },
  { id: 'p38', icon: '🧁', price: 12, category: LANGUAGE.CATEGORY_SWEETS, name: 'Věnec' }
];

