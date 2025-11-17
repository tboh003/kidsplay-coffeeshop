# Kids Coffeeshop Game - Project Specification

## Overview
Create an educational coffeeshop game for children aged 4-8 years old. The game teaches basic math skills through interactive play where kids act as both the coffeeshop owner and shopkeeper, managing customer orders and calculating totals.

## Core Concept
- **Target Audience**: Children aged 4-8 years
- **Educational Goal**: Practice basic arithmetic (addition, price calculation)
- **Game Role**: Player is coffeeshop owner and shopkeeper
- **Difficulty**: Simple math tasks with progressive difficulty options

## Game Features

### 1. Customer Management
- Game starts with zero customers
- Player can add customers by clicking the "+" button (max 3 active customers)
- Customer selection modal with 5 different icons (Boy, Girl, Child, Dog, Baby)
- Each customer represented by a unique icon/avatar
- Customers disappear after successful checkout
- Visual feedback for selected customer (highlight/active state)

### 2. Product Catalog
- Scrollable list of 20 products available for purchase
- Products organized by category (hot drinks, cold drinks, baked goods, snacks)
- Each product has:
  - Unique icon representation
  - Price in CZK (Czech Koruna)
- Products are icon-based with minimal text (prices only)
- Consistent icon style across all products

### 3. Order Management
- Per-customer order tracking
- Visual display of ordered products for selected customer
- Ability to add products to customer's order
- Ability to remove products from customer's order
- Order persists when switching between customers

### 4. Checkout Counter
- Interactive number pad (0-9 buttons)
- Child manually calculates and inputs total sum
- Validation of entered sum against actual total
- Success: Bill display + customer removal from queue
- Failure: Retry opportunity with feedback

## Game Flow

1. **Game Start**: Game begins with empty customer list and "+" button visible
2. **Add Customer**: Child clicks "+" button and selects customer icon from modal
3. **Customer Selection**: Child clicks on customer icon to select them (auto-selected on first add)
4. **Order Taking**: Child adds products to customer's order by clicking product icons
5. **Calculation**: Child mentally calculates total price of all ordered items
6. **Input**: Child enters calculated sum using number pad
7. **Validation**:
   - ✅ Correct: Show bill, play success sound, remove customer
   - ❌ Incorrect: Play error sound, allow retry
8. **Repeat**: Add new customers and continue serving

## UI/UX Layout

### Layout Structure
```
┌─────────────────────────────────────────────────────┐
│  [Customer 1]  │                      │ ┌─────────┐ │
│  [Customer 2]  │                      │ │ Order   │ │
│      [+]       │    Product Grid      │ │ Items:  │ │
│                │    (Scrollable)      │ │ - Item1 │ │
│   Customers    │                      │ │ - Item2 │ │
│   (Slim Left)  │    Icons with        │ └─────────┘ │
│                │    Prices            │             │
│                │    (20 products)     │ ┌─────────┐ │
│                │                      │ │ [1][2][3]││
│                │                      │ │ [4][5][6]││
│                │                      │ │ [7][8][9]││
│                │                      │ │ [0] [CLR]││
│                │                      │ │ Total: ? ││
│                │                      │ └─────────┘ │
└─────────────────────────────────────────────────────┘
```

### Panel Details

#### Left Panel (Slim)
- Vertical list of customer icons
- Maximum 3 customers visible
- Active customer highlighted
- Simple icon representation
- "+" button at bottom to add new customer (when < 3 customers)
- Customer selection modal with 5 available icons

#### Center Panel (Main)
- Grid layout of product icons
- Scrollable if products exceed viewport
- 20 products organized by category
- Each product shows:
  - Icon (consistent style)
  - Price below icon
- Click to add to selected customer's order

#### Right Top Panel
- Ordered products for selected customer
- List of product icons with prices
- Click to remove item from order
- Visual summary of order

#### Right Bottom Panel (Counter)
- Number pad (0-9)
- Clear/Reset button
- Display area showing entered number
- Submit/Check button

## Design Requirements

### Visual Design
- **Icon Style**: Consistent design language across all icons
- **Color Scheme**: Bright, child-friendly colors
- **Typography**: Minimal text, large readable numbers for prices
- **Feedback**: Clear visual states (hover, active, disabled)
- **Accessibility**: High contrast, large touch targets

### No Text Policy
- Only prices displayed as numbers
- All interactions icon-based
- Visual-only customer representation
- Visual-only product representation

### Audio Design
Sound effects required for:
1. ✅ **Add Item**: Pleasant "pop" or "ding" when adding product
2. ❌ **Remove Item**: Soft "whoosh" when removing product
3. 👤 **Select Customer**: Gentle sound when switching between customers or adding new customer
4. 🎉 **Correct Sum**: Celebratory sound (bells, chimes)
5. ❌ **Incorrect Sum**: Gentle "try again" sound (no harsh/scary sounds)

## Technical Requirements

### Technology Stack
- **Framework**: Modern web framework (React, Vue, or Svelte recommended)
- **Language**: TypeScript for type safety
- **Styling**: CSS-in-JS or Tailwind CSS for responsive design
- **State Management**: Context API or lightweight state library
- **Build Tool**: Vite or similar modern bundler
- **Future Target**: Android APK (consider React Native or Capacitor)

### Architecture Principles
- **Clean Code**: SOLID principles, clear separation of concerns
- **Component-Based**: Reusable, composable components
- **Type Safety**: Full TypeScript coverage
- **Extensibility**: Easy to add new products, customers, features
- **Performance**: Optimized for smooth interactions
- **Simplicity**: Avoid over-engineering, keep it maintainable

### Project Structure (Suggested)
```
src/
├── components/
│   ├── CustomerList/
│   ├── CustomerSelector/
│   ├── ProductGrid/
│   ├── OrderPanel/
│   └── CheckoutCounter/
├── types/
│   ├── Customer.ts
│   ├── Product.ts
│   └── Order.ts
├── hooks/
│   ├── useGameState.ts
│   └── useAudio.ts
├── data/
│   ├── products.ts
│   └── customers.ts
├── utils/
│   ├── calculations.ts
│   └── validators.ts
└── assets/
    ├── icons/
    └── sounds/
```

### Local Development
- **Docker Compose**: Provide containerized development environment
- **Hot Reload**: Fast development feedback loop
- **Port**: Standard web port (e.g., 3000)
- **No Backend Required**: Client-side only application initially

### Future Mobile Conversion
- **Responsive Design**: Mobile-first approach
- **Touch Optimized**: Large touch targets (min 44x44px)
- **PWA Ready**: Service worker support
- **Capacitor/Cordova**: For Android APK generation
- **Orientation**: Portrait mode preferred

## Data Models

### Customer
```typescript
interface Customer {
  id: string;
  icon: string; // URL or icon identifier
  name?: string; // Internal only, not displayed
  order: Product[];
}
```

### Product
```typescript
interface Product {
  id: string;
  icon: string; // URL or icon identifier
  price: number; // Price in CZK
  name?: string; // Internal only, not displayed
}
```

### Game State
```typescript
interface GameState {
  customers: Customer[];
  products: Product[];
  selectedCustomerId: string | null;
  maxCustomers: 3;
}
```

## Success Criteria

### Functional Requirements
- ✅ Display up to 3 customers
- ✅ Show scrollable product catalog
- ✅ Add/remove products to/from customer orders
- ✅ Switch between customers without losing order data
- ✅ Calculate and validate order totals
- ✅ Play appropriate sound effects
- ✅ Remove customer after successful checkout

### Non-Functional Requirements
- ✅ Fast load time (<2 seconds)
- ✅ Smooth animations and transitions
- ✅ Responsive to different screen sizes
- ✅ Works on modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Touch-friendly for tablets
- ✅ Clean, documented code
- ✅ Runs via Docker Compose locally

## Extensibility Points

### Easy to Extend
1. **New Products**: Add to product data file
2. **New Customers**: Add to customer data file
3. **Difficulty Levels**: 
   - Easy: Prices 1-20 CZK
   - Medium: Prices 1-50 CZK
   - Hard: Prices 1-100 CZK
4. **Sound Themes**: Swap sound effect sets
5. **Icon Themes**: Change icon pack
6. **Multiple Languages**: Add currency/number localization
7. **Customer Behavior**: AI-driven customer preferences
8. **Achievements**: Badges for milestones
9. **Time Challenge**: Optional timed mode

## Development Phases

### Phase 1: MVP (Minimum Viable Product)
- Basic UI layout with all panels
- Customer selector modal with 5 icon choices
- Start with 0 customers, add via "+" button
- 20 sample products with icons and prices (organized by category)
- Add/remove product functionality
- Basic checkout with sum validation
- Web Audio API sound effects

### Phase 2: Polish (Completed)
- Expanded product catalog (20 items)
- Customer selection system with modal
- Dynamic customer management (add customers during play)
- Header removed for cleaner UI
- Smooth animations and transitions
- Enhanced visual feedback

### Phase 3: Enhancement
- Difficulty levels
- More products and customers
- Better audio mixing
- Achievement system (optional)
- Settings panel (sound on/off)

### Phase 4: Mobile
- Android APK build setup
- Touch optimization
- Performance tuning
- App store preparation

## Getting Started Command

```bash
# Initialize project
npm create vite@latest kidsplay-coffeeshop -- --template react-ts

# Development with Docker
docker-compose up

# Access at http://localhost:3000
```

## Documentation Requirements

Create the following documentation:
1. **README.md**: Project overview, setup instructions, architecture
2. **CONTRIBUTING.md**: Code style, PR process, testing guidelines
3. **.copilot/instructions.md**: AI assistant context about project intent and technical decisions
4. **CHANGELOG.md**: Version history and changes
5. **docs/ARCHITECTURE.md**: Detailed technical architecture
6. **docs/DESIGN.md**: UI/UX design decisions and patterns

## Notes
- Keep the code simple and maintainable
- Prioritize user experience over technical complexity
- Design for children: large targets, forgiving UX, positive reinforcement
- Test with actual children in target age range if possible
- Ensure all sounds are child-appropriate (not scary or harsh)
- Consider color blindness in icon/color choices
- Make sure the game is fun and encouraging, not frustrating
