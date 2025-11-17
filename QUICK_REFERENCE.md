# Quick Reference Guide

## 🚀 Start Commands

```bash
# Using Docker (recommended)
docker-compose up

# Using npm (with correct Node path)
export PATH="/Users/tbohac/.nvm/versions/node/v22.18.0/bin:$PATH"
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎮 Game Controls

| Action | How To |
|--------|--------|
| Add customer | Click "+" button in customer panel, choose icon |
| Select customer | Click on customer icon (left panel) |
| Add product | Click on product icon (center panel) |
| Remove from order | Click on item in order list (right top) |
| Enter number | Click number on keypad (right bottom) |
| Clear input | Click CLR button |
| Check answer | Click ✓ button |

## 📂 Important Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main application component |
| `src/hooks/useGameState.ts` | Game logic and state |
| `src/hooks/useAudio.ts` | Sound effects |
| `src/data/products.ts` | Product catalog (20 items) |
| `src/data/customers.ts` | Available customer icons (5 choices) |
| `src/components/CustomerSelector/` | Customer selection modal |
| `src/types/` | TypeScript interfaces |

## 🎨 Component Overview

```
App
├── CustomerList (left panel - orange)
│   ├── Customer icons
│   └── Add customer button (+)
├── CustomerSelector (modal - when + clicked)
├── ProductGrid (center panel - blue)
└── RightPanel
    ├── OrderPanel (top - purple)
    └── CheckoutCounter (bottom - green)
```

## 🔊 Sound Types

```typescript
playSound('add')      // When adding product, selecting customer, or adding new customer
playSound('remove')   // When removing product
playSound('success')  // On correct answer
playSound('error')    // On wrong answer
```

## 📝 Adding New Content

### Add a Product
Edit `src/data/products.ts`:
```typescript
{ id: 'p21', icon: '🍕', price: 35, name: 'Pizza' }
```

### Add a Customer Icon Option
Edit `src/data/customers.ts`:
```typescript
{ icon: '�', name: 'Cat' }
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `lsof -ti:3000 \| xargs kill` |
| Node not found | `export PATH="/Users/tbohac/.nvm/versions/node/v22.18.0/bin:$PATH"` |
| Dependencies not installed | `npm install` |
| Docker issues | `docker-compose down && docker-compose up --build` |
| TypeScript errors | Make sure `npm install` completed successfully |

## 🌐 Access URLs

| Environment | URL |
|-------------|-----|
| Local | http://localhost:3000 |
| Network | http://172.20.10.118:3000 |
| Network | http://192.168.64.1:3000 |

## 📦 Project Structure

```
src/
├── components/      # React components
├── hooks/           # Custom React hooks
├── types/           # TypeScript interfaces
├── data/            # Game data (products, customers)
├── App.tsx          # Main app
└── main.tsx         # Entry point
```

## 🎯 Game Logic Flow

```typescript
// 1. Add customer (via + button and modal)
addCustomer(icon, name)

// 2. Select customer (auto-selected on first add)
setSelectedCustomerId(customerId)

// 3. Add product to order
addProductToOrder(product)

// 4. Remove product from order
removeProductFromOrder(index)

// 5. Checkout (on correct answer)
checkout() // Removes customer, selects next
```

## 🎨 CSS Class Patterns

| Pattern | Example | Usage |
|---------|---------|-------|
| Component name | `.customer-list` | Main container |
| Element | `.customer-item` | Child element |
| Modifier | `.active` | State variant |
| Icon | `.customer-icon` | Icon wrapper |

## 📊 Current Data

- **Products**: 20 items (5-35 Kč)
  - Hot drinks: 4 items
  - Cold drinks: 5 items  
  - Baked goods: 7 items
  - Snacks: 4 items
- **Customer Icons**: 5 choices (Boy, Girl, Child, Dog, Baby)
- **Max Customers**: 3 active at once
- **Components**: 5 main (including CustomerSelector)
- **Hooks**: 2 custom
- **Sound Effects**: 4 types

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript config |
| `vite.config.ts` | Vite build config |
| `docker-compose.yml` | Docker setup |
| `Dockerfile` | Container image |

## 💡 Best Practices

1. **Adding Features**: Start small, test thoroughly
2. **Styling**: Use existing color scheme
3. **Sounds**: Keep child-appropriate
4. **UX**: Large targets (44px min)
5. **Code**: TypeScript strict mode
6. **Components**: Keep small and focused
7. **State**: Use immutable updates
8. **Testing**: Test with actual children

## 📚 Resources

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Vite Docs](https://vitejs.dev)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

---

**Quick Tip**: Use `npm run dev` for development with hot reload!
