# Merki - Smart Productivity

A minimalist, interactive landing page for Merki—a smart productivity app for teams. Features a fully functional workspace demo with smooth animations, dark mode support, and persistent task management.

## ✨ Features

- **Interactive Workspace Demo** - Fully functional task management system with localStorage persistence
- **Smooth Animations** - Subtle hover effects, transitions, and micro-interactions throughout
- **Dark Mode** - Automatic system preference detection with manual toggle
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Keyboard Shortcuts** - Power user features (Ctrl/Cmd + K to add tasks)
- **Color-Coded Tags** - Visual task categorization (Design, Sales, Marketing, General)
- **Progress Tracking** - Real-time completion percentage and progress bar

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd merki---smart-productivity
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── components/          # React components
│   ├── Button.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx        # Interactive workspace demo
│   ├── Navbar.tsx
│   ├── Pricing.tsx
│   ├── RevealOnScroll.tsx
│   └── Testimonials.tsx
├── App.tsx             # Main app component
├── index.html          # HTML entry point
├── index.tsx           # React entry point
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite configuration
```

## 🎨 Design Philosophy

This project embraces a minimalist philosophy where form follows function. The interactive workspace demo replaces static mockups, allowing users to experience the product immediately. See [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md) for detailed design rationale.

## 🎯 Key Interactions

- **Add Tasks**: Click the "+" button or press `Ctrl/Cmd + K`
- **Complete Tasks**: Click on any task to toggle completion
- **Delete Tasks**: Hover over a task and click the X button
- **Add Random Task**: Click the floating action button (bottom right)
- **Toggle Dark Mode**: Use the theme toggle in the navbar

## 📝 License

This project is for demonstration purposes.

