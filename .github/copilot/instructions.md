# GitHub Copilot Instructions - Kids Coffeeshop Game

## Project Intent

This is an educational game designed for children aged 4-8 years old. The primary goal is to teach basic arithmetic (addition and price calculation) through an engaging, interactive coffeeshop simulation. The child plays as both the owner and shopkeeper, managing customer orders and calculating totals.

**Key Design Philosophy**: Simple, intuitive, child-friendly, and encouraging. The game should be fun, not frustrating.

## Target Audience Considerations

When generating code or suggesting features, remember:
- **Age Group**: 4-8 years old
- **Reading Ability**: Minimal to developing (hence icon-based UI)
- **Motor Skills**: Developing fine motor control (large touch targets required)
- **Attention Span**: Short (quick, rewarding feedback loops)
- **Learning Style**: Visual and interactive learners
- **Emotional Needs**: Positive reinforcement, no punitive feedback

## Technical Stack

### Current Technology
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (or CSS-in-JS)
- **State Management**: React Context API or Zustand
- **Icons**: Consistent icon library (e.g., custom SVG set)
- **Audio**: Web Audio API for sound effects

### Future Technology
- **Mobile Target**: Android APK via Capacitor or React Native
- **Build**: Docker Compose for local development

## Code Standards

### TypeScript
- Always use strict mode
- Define interfaces for all data models
- Avoid `any` type - use `unknown` if type is truly dynamic
- Use descriptive type names (e.g., `Customer`, `Product`, `OrderItem`)

### React Components
- Functional components only (no class components)
- Use hooks for state and side effects
- Keep components small and focused (single responsibility)
- Props should be typed with interfaces
- Extract reusable logic into custom hooks

### File Naming
- Components: PascalCase (e.g., `CustomerList.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useGameState.ts`)
- Utils: camelCase (e.g., `calculations.ts`)
- Types: PascalCase (e.g., `Customer.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_CUSTOMERS`)

### Code Organization
```
src/
├── components/          # React components
│   ├── CustomerList/   # Customer panel
│   ├── ProductGrid/    # Product catalog
│   ├── OrderPanel/     # Order display
│   └── CheckoutCounter/# Number pad and validation
├── hooks/              # Custom React hooks
├── types/              # TypeScript interfaces and types
├── data/               # Static data (products, customers)
├── utils/              # Helper functions
├── assets/             # Icons, sounds, images
├── constants/          # App-wide constants
└── styles/             # Global styles
```

## Core Data Models

### Customer Interface
```typescript
interface Customer {
  id: string;          // Unique identifier
  icon: string;        // Path to icon or icon name
  order: OrderItem[];  // Array of ordered products
}
```

### Product Interface
```typescript
interface Product {
  id: string;        // Unique identifier
  name: string;      // Internal name (not displayed to user)
  icon: string;      // Path to icon or icon name
  price: number;     // Price in CZK
}
```

### OrderItem Interface
```typescript
interface OrderItem {
  productId: string;
  quantity: number;
}
```

### Game State Interface
```typescript
interface GameState {
  customers: Customer[];
  products: Product[];
  selectedCustomerId: string | null;
  difficulty: 'easy' | 'medium' | 'hard';
}
```

## Component Guidelines

### CustomerList Component
- Display up to 3 customers
- Highlight selected customer
- Large, clickable icons (min 80x80px)
- Vertical layout on left side
- Empty slots shown when < 3 customers

### ProductGrid Component
- Scrollable grid layout
- Responsive columns (adjust based on screen size)
- Each product: icon + price below
- Click to add to selected customer's order
- Visual feedback on click (animation)

### OrderPanel Component
- Show products for selected customer only
- List format with icons and prices
- Click on item to remove from order
- Show total count of items
- Empty state message when no items

### CheckoutCounter Component
- Number pad (0-9) in grid layout
- Clear/Reset button
- Display area for entered number
- Submit/Check button
- Visual feedback for correct/incorrect sum
- Do not show actual total (child must calculate)

## Sound Effect Guidelines

When implementing audio:
- Preload all sound files on app start
- Keep sound files small (<100KB each)
- Provide option to mute/unmute in settings
- Use positive, child-friendly sounds only
- No harsh, scary, or startling sounds
- Volume should be consistent across all sounds

### Required Sound Events
1. `addItem` - Adding product to order
2. `removeItem` - Removing product from order
3. `correctSum` - Successful checkout
4. `incorrectSum` - Failed checkout attempt

## UI/UX Principles

### Visual Feedback
- Hover states on all interactive elements
- Active/selected states clearly visible
- Loading states for any async operations
- Smooth transitions (200-300ms)
- Celebratory animations for success

### Accessibility
- High contrast ratios (WCAG AA minimum)
- Large touch targets (44x44px minimum)
- Focus indicators for keyboard navigation
- Alt text for icons (for screen readers)
- Semantic HTML elements

### Child-Friendly Design
- Bright, engaging colors
- Large, clear icons
- Minimal text (prices only)
- Positive feedback for all actions
- No time pressure (except optional hard mode)
- Forgiving UX (easy to undo mistakes)

## Extensibility Patterns

### Adding New Products
Products should be defined in `src/data/products.ts`:
```typescript
export const products: Product[] = [
  { id: 'coffee', name: 'Coffee', icon: 'coffee.svg', price: 45 },
  { id: 'tea', name: 'Tea', icon: 'tea.svg', price: 35 },
  // Add more products here
];
```

### Adding New Customers
Customers should be defined in `src/data/customers.ts`:
```typescript
export const customerTemplates: Omit<Customer, 'order'>[] = [
  { id: 'customer1', icon: 'child1.svg' },
  { id: 'customer2', icon: 'child2.svg' },
  // Add more customer templates here
];
```

### Difficulty Levels
Implement difficulty by filtering products by price range:
- **Easy**: Products priced 1-20 CZK
- **Medium**: Products priced 1-50 CZK  
- **Hard**: Products priced 1-100 CZK

## State Management

Use React Context for global state:
- `GameContext` - Overall game state
- `AudioContext` - Sound effect management
- `SettingsContext` - User preferences (sound on/off, difficulty)

Keep state minimal and derived:
- Don't store calculated values in state
- Derive order totals from order items
- Derive available customers from max limit

## Performance Considerations

- Lazy load images and sounds
- Memoize expensive calculations
- Use `React.memo` for pure components
- Debounce user input where appropriate
- Optimize re-renders with proper dependencies

## Testing Guidelines

### Unit Tests
- Test utility functions (calculations, validators)
- Test custom hooks in isolation
- Test data transformations

### Component Tests
- Test user interactions (clicking, selecting)
- Test conditional rendering
- Test prop variations

### Integration Tests
- Test complete user flows (order → checkout)
- Test customer switching with orders
- Test sound effect triggering

## Docker Setup

Provide `docker-compose.yml` for local development:
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

## Future Android Considerations

When preparing for Android APK:
- Design mobile-first (portrait orientation)
- Use relative units (rem, em) not fixed pixels
- Test on various screen sizes
- Optimize asset sizes for mobile
- Consider offline functionality
- Use Capacitor plugins for native features

## Common Patterns

### Adding Product to Order
```typescript
const addProductToOrder = (customerId: string, productId: string) => {
  // Find customer
  // Check if product already in order
  // If yes: increment quantity
  // If no: add new order item
  // Play sound effect
  // Update state
};
```

### Validating Checkout
```typescript
const validateCheckout = (customerId: string, enteredSum: number): boolean => {
  // Get customer's order
  // Calculate actual total
  // Compare with entered sum
  // Play appropriate sound
  // If correct: clear order, remove customer
  // Return validation result
};
```

## Error Handling

- Gracefully handle missing icons (show placeholder)
- Handle audio load failures (optional feature)
- Validate user input (non-negative numbers)
- Provide fallbacks for browser incompatibilities

## Git Commit Conventions

Follow conventional commits format:
- `feat:` New features
- `fix:` Bug fixes
- `style:` UI/styling changes
- `refactor:` Code restructuring
- `docs:` Documentation updates
- `test:` Test additions/changes
- `chore:` Build, config, dependencies

## When Generating Code

Always consider:
1. Is this child-appropriate and safe?
2. Is the UX intuitive for young children?
3. Is the code maintainable and extensible?
4. Are there proper TypeScript types?
5. Is performance optimized?
6. Are there adequate comments for complex logic?
7. Does this follow the project's patterns?

## Resources

- React Documentation: https://react.dev
- TypeScript Handbook: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Web Audio API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
- Capacitor: https://capacitorjs.com/docs

## Questions to Ask

When implementing new features, consider:
- How does this improve the learning experience?
- Will a 4-year-old understand this?
- Is this feature necessary or nice-to-have?
- Does this maintain the simplicity principle?
- How can this be made more engaging for kids?
