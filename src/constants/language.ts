// Czech language constants for the Kids Coffeeshop game

export const LANGUAGE = {
  // Product Grid
  PRODUCTS_TITLE: 'Produkty',
  
  // Customer List
  CUSTOMERS_TITLE: 'Zákazníci',
  
  // Product Categories
  CATEGORY_HOT_DRINKS: 'Horké nápoje',
  CATEGORY_COLD_DRINKS: 'Studené nápoje',
  CATEGORY_BAKED_GOODS: 'Pečivo',
  CATEGORY_SAVORY: 'Slané jídlo',
  CATEGORY_SWEETS: 'Sladkosti',
  
  // Order Panel
  ORDER_TITLE: 'Objednávka',
  ORDER_EMPTY: 'Prázdná objednávka',
  
  // Checkout Counter
  CHECKOUT_TOTAL: 'Celkem',
  CHECKOUT_CLEAR: 'Smazat',
  CHECKOUT_CHECK: 'Zkontrolovat',
  CHECKOUT_ENTER_TOTAL: 'Zadej celkovou částku',
  
  // Feedback messages
  SUCCESS: 'Správně!',
  TRY_AGAIN: 'Zkus to znovu',
  
  // Currency
  CURRENCY: 'Kč',
  
  // Customer names (internal)
  CUSTOMER_BOY: 'Chlapec',
  CUSTOMER_GIRL: 'Dívka',
  CUSTOMER_CHILD: 'Dítě',
  CUSTOMER_DOG: 'Pejsek',
  CUSTOMER_BABY: 'Miminko',
  
  // Customer Selector
  CUSTOMER_SELECTOR_TITLE: 'Vyber zákazníka',
  CUSTOMER_SELECTOR_CANCEL: 'Zrušit'
} as const;

export type LanguageKey = keyof typeof LANGUAGE;
