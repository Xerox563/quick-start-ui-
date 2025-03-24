#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");

console.log(
  "🚀 Setting up your React project with Vite, Tailwind CSS, Material UI, ShadCN UI, and Redux Toolkit...\n"
);

// Step 1: Create Vite project
execSync("npm create vite@latest my-app -- --template react", {
  stdio: "inherit",
});

// Step 2: Install dependencies
console.log("\n📦 Installing dependencies...\n");
execSync("cd my-app && npm install", { stdio: "inherit" });

// Step 3: Configure Tailwind CSS
console.log("\n🎨 Setting up Tailwind CSS...\n");
execSync("cd my-app && npx tailwindcss init -p", { stdio: "inherit" });

// Step 4: Update Tailwind config
const tailwindConfigPath = "my-app/tailwind.config.js";
const tailwindConfig = `
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;
fs.writeFileSync(tailwindConfigPath, tailwindConfig);

console.log("\n✅ Tailwind CSS configured!\n");

// Step 5: Update index.css
const indexCssPath = "my-app/src/index.css";
const tailwindStyles = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;
fs.writeFileSync(indexCssPath, tailwindStyles);

console.log("\n🖌️ Tailwind CSS styles added!\n");

// Step 6: Install Material UI & ShadCN UI
console.log("\n🌟 Installing Material UI & ShadCN UI...\n");
execSync(
  "cd my-app && npm install @mui/material @mui/icons-material @shadcn/ui",
  { stdio: "inherit" }
);

// Step 7: Install Redux Toolkit
console.log("\n🔗 Installing Redux Toolkit...\n");
execSync("cd my-app && npm install @reduxjs/toolkit react-redux", {
  stdio: "inherit",
});

console.log(
  "\n🎉 Setup complete! Your project is ready. Navigate to 'my-app' and start coding! 🚀"
);
