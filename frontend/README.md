# Secure Blink Frontend - Vue 3 + TailwindCSS

A modern, responsive website built with Vue 3, TailwindCSS, and TypeScript, implementing the Adobe XD design specifications.

## 🚀 Features

- **Vue 3** with Composition API and `<script setup>`
- **TailwindCSS v4** with PostCSS integration
- **TypeScript** for type safety
- **Vue Router v4** for navigation
- **Pinia** for state management
- **VeeValidate + Yup** for form validation
- **Responsive Design** with mobile-first approach
- **Custom Typography System** mapped to design tokens
- **Modular Component Architecture**

## 🛠️ Tech Stack

- **Framework**: Vue 3.4+
- **Styling**: TailwindCSS v4.1.12
- **Build Tool**: Vite 5.x
- **Language**: TypeScript
- **Package Manager**: Yarn
- **State Management**: Pinia 3.x
- **Routing**: Vue Router 4.x
- **Form Validation**: VeeValidate 4.x + Yup

## 📁 Project Structure

```
frontend/
├── src/
│   ├── assets/           # SVG illustrations and images
│   ├── components/       # Reusable Vue components
│   │   ├── sections/     # Page section components
│   │   ├── Header.vue    # Navigation header
│   │   └── Footer.vue    # Site footer
│   ├── pages/           # Page components
│   │   └── Home.vue     # Home page
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores
│   ├── styles/          # CSS and Tailwind configuration
│   │   ├── tailwind.css # Tailwind directives
│   │   └── utilities.css # Custom typography utilities
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── tailwind.config.js   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#0E77FF`
- **Sky Blue**: `#21B3FF`
- **Success Green**: `#4BFFA5`
- **Text Colors**: `#000000`, `#292929`, `#707070`
- **Background Tints**: `#0E77FF26`, `#16B2FF17`, `#4BFFA526`

### Typography
- **Primary Font**: Poppins (Light 300, Regular 400, SemiBold 600)
- **Secondary Font**: Muli (Regular 400)
- **System Font**: Segoe UI

### Typography Utilities
Custom utility classes for consistent typography:
- `.typo-p-semibold-55-white` - Large hero headlines
- `.typo-p-semibold-36-gray900` - Section headings
- `.typo-p-regular-20` - Body text
- `.typo-p-regular-16-tight` - Compact text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Breakpoints
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 🧩 Components

### Header Component
- Responsive navigation with mobile menu
- Logo, navigation links, and CTA button
- Sticky positioning with shadow

### Hero Section
- Blue background with rocket illustration
- Large headline and call-to-action
- Decorative geometric shapes

### About Section
- Two-column layout with illustration
- Company description and CTA
- Decorative dot pattern

### Services Section
- Interactive service tabs
- Feature cards with checkmarks
- Service-specific content

### Features Section (Core Technologies)
- Technology grid with icons
- Tab navigation for categories
- Responsive grid layout

### Contact Section
- Contact form with validation
- Customer support illustration
- Form submission handling

### Footer
- Multi-column layout
- Social media icons
- Contact information and links

## 🎯 Key Features

### Typography System
Custom utility classes that map directly to design specifications:
```css
.typo-p-semibold-55-white {
  @apply font-poppins font-semibold text-55 text-white;
}
```

### Color System
Extended TailwindCSS colors matching the design palette:
```javascript
colors: {
  blue: '#0E77FF',
  gray900: '#292929',
  blueTint10: '#0E77FF26',
  // ... more colors
}
```

### Responsive Layout
Uses TailwindCSS responsive utilities and custom containers:
```html
<div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
```

## 🔧 Configuration

### TailwindCSS
Configured with PostCSS plugin for optimal performance:
```javascript
// postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {}
  }
}
```

### Vite
Includes path aliases and Vue plugin:
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## 📄 License

This project is part of the Secure Blink Frontend Developer Assignment.

## 🤝 Contributing

1. Follow the existing code style and conventions
2. Use TypeScript for all new components
3. Ensure responsive design works across all breakpoints
4. Test form validation and user interactions
5. Maintain accessibility standards

---

Built with ❤️ using Vue 3 + TailwindCSS
