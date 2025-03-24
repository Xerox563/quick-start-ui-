# Quick Start UI

A fast and modern React starter kit with Vite, Tailwind CSS, Material UI, ShadCN UI, and Redux Toolkit. Pre-configured for performance, scalability, and seamless UI development. Get started instantly!

## Features

- ⚡️ **Vite** - Lightning-fast development server and build tool
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework with latest features
- 📱 **Material UI** - Comprehensive library of React components
- 🔮 **ShadCN UI** - Beautifully designed components built with Radix UI and Tailwind
- 🔄 **Redux Toolkit** - State management made simple
- 📦 **Zero Configuration** - Start developing immediately
- 🚀 **Production Ready** - Optimized for performance out of the box
- 🧩 **Modern React** - Latest React features and best practices

## Installation

### Create a New Project

```bash
# Using npm
npx quick-start-ui my-app

# Using yarn
yarn create quick-start-ui my-app

# Using pnpm
pnpm create quick-start-ui my-app
Add to Existing Project
bashCopy# Using npm
npm install quick-start-ui

# Using yarn
yarn add quick-start-ui

# Using pnpm
pnpm add quick-start-ui
Usage
Initialize in Your Project
javascriptCopy// In your project's entry file
import { initializeQuickStartUI } from 'quick-start-ui';

initializeQuickStartUI({
  // Optional configuration
  theme: 'light', // 'light' or 'dark'
  enableRedux: true,
  customTailwindConfig: {}, // Override default Tailwind config
  materialUIComponents: ['Button', 'TextField'], // Include only specific components
});
Use Components
jsxCopyimport { Button, Card } from 'quick-start-ui/components';
import { useAppSelector, useAppDispatch } from 'quick-start-ui/redux';

function MyComponent() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Card className="p-4 shadow-lg">
      <h1 className="text-2xl font-bold">Welcome to Quick Start UI</h1>
      <p>Counter: {counter}</p>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: 'counter/increment' })}
      >
        Increment
      </Button>
    </Card>
  );
}
Available Templates
Quick Start UI comes with several project templates to get you started:

Basic: Minimal setup with React and Vite
Dashboard: Admin dashboard template with navigation and layouts
E-commerce: Product listing and cart functionality
Blog: Content management with MDX support

To use a template:
bashCopynpx quick-start-ui my-app --template dashboard
Configuration
Create a quick-start-ui.config.js file in your project root to customize:
javascriptCopymodule.exports = {
  // Framework options
  frameworks: {
    tailwind: true,
    materialUI: true,
    shadcnUI: true,
    redux: true
  },

  // Theme configuration
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981',
      // Add custom colors
    },
    fonts: {
      sans: ['Inter', 'sans-serif'],
      // Add custom fonts
    }
  },

  // Build optimization
  build: {
    treeshake: true,
    minify: true,
    splitChunks: true
  }
};
CLI Commands
bashCopy# Start development server
npx quick-start-ui dev

# Build for production
npx quick-start-ui build

# Preview production build
npx quick-start-ui preview

# Generate new component
npx quick-start-ui generate component MyComponent

# Add a new page
npx quick-start-ui generate page About
Browser Support

Chrome/Edge (last 2 versions)
Firefox (last 2 versions)
Safari (last 2 versions)

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

License
This project is licensed under the ISC License - see the LICENSE file for details.
Developed By
Created with ❤️ by Amit Gangwar

If you find this package helpful, please consider giving it a star on GitHub!
```
