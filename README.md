# Kids Coffeeshop Game ☕🧁

An educational coffeeshop game for children aged 4-8 years old. The game teaches basic math skills through interactive play where kids act as both the coffeeshop owner and shopkeeper, managing customer orders and calculating totals.

## 🎮 Features

- **Dynamic Customer Management**: Start with 0 customers, add up to 3 via "+" button
- **Customer Selection Modal**: Choose from 5 different customer icons (Boy, Girl, Child, Dog, Baby)
- **Expanded Product Catalog**: 20 products organized by category (hot drinks, cold drinks, baked goods, snacks)
- **Order Management**: Add/remove products per customer with visual feedback
- **Interactive Checkout**: Number pad for manual sum calculation with validation
- **Audio Feedback**: Sound effects for actions (add, remove, select customer, success, error)
- **Clean UI**: Child-friendly design with bright colors, large touch targets, and no header

## 🚀 Quick Start

### Option 1: Docker (Recommended)

The easiest way to run the application:

```bash
# Build and start the container
docker-compose up

# Access the app at http://localhost:3000
```

### Option 2: Local Node.js

Prerequisites:
- Node.js v22.18.0 or higher
- npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access the app at http://localhost:3000
```

## 📁 Project Structure

```
src/
├── components/
│   ├── CustomerList/      # Customer selection sidebar with + button
│   ├── CustomerSelector/  # Modal for choosing customer icons
│   ├── ProductGrid/       # Product catalog with prices
│   ├── OrderPanel/        # Current customer's order
│   └── CheckoutCounter/   # Number pad and validation
├── types/
│   ├── Customer.ts        # Customer interface
│   ├── Product.ts         # Product interface
│   └── GameState.ts       # Game state interface
├── hooks/
│   ├── useGameState.ts    # Game state management
│   └── useAudio.ts        # Sound effects
├── data/
│   ├── products.ts        # Product catalog data (20 items)
│   └── customers.ts       # Available customer icons
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## 🎯 How to Play

1. **Add a Customer**: Click the "+" button in the left panel and choose a customer icon
2. **Select Customer**: Click on a customer icon to select them (first customer is auto-selected)
3. **Take Order**: Click on product icons to add them to the customer's order
4. **Calculate Total**: Mentally add up the prices of all items
5. **Enter Sum**: Use the number pad to enter your calculated total
6. **Check**: Click the ✓ button to validate your answer
   - ✅ Correct: Customer leaves happily!
   - ❌ Incorrect: Try again!
7. **Repeat**: Add more customers and continue serving

## 🛠️ Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with Flexbox/Grid
- **State Management**: React Hooks
- **Audio**: Web Audio API
- **Containerization**: Docker

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Design Principles

- **Icon-based**: Minimal text, visual communication
- **Child-friendly**: Bright colors, large targets, forgiving UX
- **Educational**: Reinforces basic arithmetic skills
- **Responsive**: Works on desktop and tablets
- **Accessible**: High contrast, clear feedback

## 🔊 Sound Effects

The game uses the Web Audio API to generate simple sound effects:
- **Add Item**: Pleasant "ding" sound (when adding products to order or new customer)
- **Remove Item**: Soft "whoosh" sound (when removing from order)
- **Select Customer**: Pleasant sound (when switching between customers)
- **Correct Answer**: Celebratory chord
- **Incorrect Answer**: Gentle "try again" tone

## 🧪 Phase 1 & 2 - MVP Features (Current)

- ✅ Clean UI layout without header
- ✅ Start with 0 customers
- ✅ Customer selector modal with 5 icon choices (Boy, Girl, Child, Dog, Baby)
- ✅ Add customers via "+" button (max 3)
- ✅ 20 products organized by category with emoji icons and prices
- ✅ Add/remove product functionality
- ✅ Basic checkout with sum validation
- ✅ Web Audio API sound effects
- ✅ Docker development environment
- ✅ Dynamic customer management

## 🚧 Future Enhancements

### Phase 3: Enhancement
- Custom SVG icon set (replace emojis)
- High-quality sound effects
- Difficulty levels (Easy/Medium/Hard)
- Achievement system
- Settings panel (sound on/off)
- Better animations and particle effects

### Phase 4: Mobile
- Android APK build
- Touch optimization
- Performance tuning
- App store preparation

## 🤝 Contributing

This is an educational project. Contributions are welcome! Please ensure:
- Code follows TypeScript best practices
- Components are well-documented
- UI remains child-friendly
- Sounds are appropriate for children

## 📄 License

This project is created for educational purposes.

## 🎓 Educational Value

This game helps children practice:
- **Addition**: Adding multiple prices together
- **Number Recognition**: Reading and entering numbers
- **Mental Math**: Calculating sums without calculator
- **Problem Solving**: Correcting mistakes and trying again
- **Fine Motor Skills**: Using mouse/touch controls

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
```

### Docker issues
```bash
# Rebuild container
docker-compose down
docker-compose up --build
```

### Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For issues or questions, please open an issue on the project repository.

---

Made with ❤️ for young learners
