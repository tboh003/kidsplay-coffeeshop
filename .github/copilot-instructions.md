# Kids Coffeeshop Game - Copilot Instructions

## Project Context

This is an educational game designed for children aged 4-8 years old to practice basic arithmetic (addition) in a fun, interactive coffeeshop setting. The child plays as both owner and shopkeeper.

## Core Design Principles

1. **Child-Friendly UX**
   - Large, clickable targets (min 44x44px)
   - Bright, cheerful colors
   - No harsh sounds or scary feedback
   - Forgiving and encouraging
   - Visual-first, minimal text

2. **Educational Goals**
   - Reinforce addition skills
   - Practice mental math
   - Build confidence through positive reinforcement
   - Progressive learning (future phases will add difficulty levels)

3. **Code Quality**
   - TypeScript for type safety
   - Component-based architecture
   - Clean, maintainable code
   - Well-documented functions
   - Follow SOLID principles

## Technical Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **CSS3** for styling (no UI libraries to keep it simple)
- **Web Audio API** for sound effects
- **Docker** for containerized development

## Architecture Overview

### State Management
- Custom `useGameState` hook manages all game logic
- No external state management library (keep it simple)
- Local state for UI components

### Component Structure
- **CustomerList**: Displays up to 3 customers, handles selection, includes "+" button to add customers
- **CustomerSelector**: Modal for choosing customer icon from 5 options (Boy, Girl, Child, Dog, Baby)
- **ProductGrid**: Scrollable catalog of 20 products with add-to-order
- **OrderPanel**: Shows current customer's order, allows removal
- **CheckoutCounter**: Number pad input and validation

### Data Flow
1. User clicks "+" button → Customer selector modal opens
2. User selects customer icon → Customer added, auto-selected if first
3. User selects customer → `selectedCustomerId` updates
4. User clicks product → Added to selected customer's order
5. User clicks order item → Removed from order
6. User enters total and validates → Checkout or retry

## Important Patterns

### Adding New Products
```typescript
// In src/data/products.ts
{ id: 'p21', icon: '🍕', price: 35, name: 'Pizza' }
```

### Adding New Customer Icon Options
```typescript
// In src/data/customers.ts (availableCustomerIcons array)
{ icon: '�', name: 'Cat' }
```

### Sound Effects
- Use `playSound()` from `useAudio` hook
- Types: 'add' (products & customer selection), 'remove', 'success', 'error'
- Keep sounds child-appropriate
- Sound plays on: adding products, removing products, selecting customers, adding new customers, correct answer, incorrect answer

## Future Extensibility

The code is designed to easily support:
- Difficulty levels (adjust price ranges)
- More products/customers (add to data files)
- Different icon themes (swap icon strings)
- Sound themes (modify `useAudio` hook)
- Achievements (add new state and UI)
- Timed challenges (add timer state)

## Testing Considerations

When adding features, ensure:
- Works with touch on tablets
- Responsive on different screen sizes
- Sounds play correctly (Web Audio quirks)
- Math validation is accurate
- No confusing or frustrating UX

## Code Style

- Use functional components with hooks
- TypeScript strict mode enabled
- Descriptive variable names
- Comment complex logic
- Keep components small and focused
- CSS classes follow BEM-like naming

## Common Tasks

### Adding a new component:
1. Create folder in `src/components/`
2. Create `ComponentName.tsx` and `ComponentName.css`
3. Create `index.ts` for clean imports
4. Add to parent component

### Modifying game logic:
- Edit `src/hooks/useGameState.ts`
- Keep state updates immutable
- Use `useCallback` for performance

### Styling changes:
- Edit component's `.css` file
- Use CSS custom properties for colors
- Maintain responsive breakpoints

## Known Limitations (Phase 1 MVP)

- No persistence (state resets on refresh)
- Basic emoji icons (custom icons in Phase 3)
- Simple sound effects (better audio in Phase 3)
- No settings/preferences
- Desktop/tablet only (mobile APK in Phase 4)

## Debugging Tips

- Check browser console for errors
- Use React DevTools to inspect state
- Test audio in user-initiated context (autoplay restrictions)
- Verify calculations with known values
- Test with actual children if possible

## Resources

- Project spec: `PROJECT_PROMPT.md`
- Main README: `README.md`
- Product data: `src/data/products.ts`
- Customer data: `src/data/customers.ts`

---

When helping with this project, always keep the target audience (children 4-8) in mind. Prioritize simplicity, clarity, and joyful user experience over technical sophistication.
