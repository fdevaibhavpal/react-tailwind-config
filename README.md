# `React Tailwind Config`

`react-tailwind-config` is a CLI tool designed to **simplify and speed up** the process of setting up **Tailwind CSS** in your Vite React projects. No more manual configuration—just one command to handle it all!

## Why Use `react-tailwind-config`?

- **Time-Saving**: Automates the entire setup process of Tailwind CSS in a Vite React project.
- **Hassle-Free**: No need to worry about missing steps or incorrect configurations.
- **Beginner-Friendly**: Perfect for developers who want to focus on building, not configuring.
- **Day-to-Day Utility**: A must-have for React developers who frequently start new projects and love using Tailwind CSS.

---

## 🎁 Features

- 📦 **Automatic Installation**:
  Installs `tailwindcss`, `postcss`, and `autoprefixer` as `devDependencies`.
  
- 🛠️ **Configuration Made Easy**:
  Creates a `tailwind.config.js` file with the appropriate content paths for React components.

- ✍️ **CSS Integration**:
  Adds the required Tailwind CSS directives (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`) to the top of your `src/index.css` without removing your existing styles.

- 🚀 **Designed for Vite + React**:
  Optimized for Vite projects using React as the frontend framework.

---

## 📋 Requirements

Before using this tool, ensure you have the following installed:

- **Node.js**: Version 16 or higher
- **NPM**: Installed with Node.js
- **Vite Project**: A Vite React project must be initialized

---

## 🚀 Quick Start Guide

---

### Step 1: Initialize a New Vite React Project (If Not Done Already)

If you don’t have a Vite React project yet, create one using:

```bash
npm create vite@latest todo-app -- --template react
cd todo-app
npm install
```
#### Option 2: Now install `react-tailwind-config` in your project
```bash
npm install react-tailwind-config
```

---

### Step 3: Run `react-tailwind-config`

Inside the root of your Vite React project, run the following command:

```bash
npx react-tailwind-config
```

---

### Step 4: What Happens?

Once you run the command, `react-tailwind-config` will:
1. **Install Dependencies**:
   Adds `tailwindcss`, `postcss`, and `autoprefixer` to your project’s `devDependencies`.

2. **Generate `tailwind.config.js`**:
   Creates a `tailwind.config.js` file at the root of your project with the following template:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Update `src/index.css`**:
   Prepends Tailwind CSS directives to the top of `src/index.css` without removing your existing styles:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   /* Your existing styles remain untouched */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   ```

---

### Step 5: Start Your Project

You’re all set! Start the development server to see Tailwind CSS in action:

```bash
npm run dev
```

---

## 💡 Example Workflow

Here’s how you can use `react-tailwind-config` in a fresh project:

```bash
# 1. Create a new Vite React project
npm create vite@latest my-react-blog -- --template react
cd my-react-blog

# 2. Install react-tailwind-config
npm install react-tailwind-config

# 3. Run the Tailwind CSS setup
npx react-tailwind-config

# 4. Start your project
npm run dev
```

---

## 💎 Benefits of `react-tailwind-config`

### 🌟 Perfect for Beginners:
No need to learn Tailwind's manual setup process.

### ⚡ Faster Setup:
Get up and running with Tailwind CSS in seconds.

### 🔧 Seamless Integration:
Handles all configurations for Vite and React, ensuring no compatibility issues.

### 💼 Ideal for Professionals:
Saves time for developers who frequently start new Vite React projects and need Tailwind CSS.

---

## 📚 FAQs

### **Q1: What does `react-tailwind-config` do?**
It automates the entire process of setting up Tailwind CSS in a Vite React project:
- Installs required packages.
- Generates `tailwind.config.js`.
- Updates `src/index.css` with Tailwind directives.

---

### **Q2: Can I use this with non-React Vite projects?**
Currently, it's optimized for Vite projects using React. Support for other templates may be added in the future.

---

### **Q3: Does it overwrite my existing styles?**
No. The tool appends the Tailwind CSS directives at the top of `src/index.css` without removing your existing styles.

---

### **Q4: Is it production-ready?**
Yes! You can use it in both personal and professional projects to streamline your workflow.

---

## Love `react-tailwind-config`?

If you enjoy using `react-tailwind-config`, give it a ⭐ on GitHub and share it with your fellow developers! 🚀

---

Enjoy building beautiful, responsive apps with **Tailwind CSS** and **Vite React** in seconds! 💻✨

---

### 📞 Contact the Author

If you have any questions, issues, or suggestions, feel free to reach out to me: 

`This project was created and maintained by:`
- **Vaibhav Pal**  
- **Profile**: Software Developer
- **Email**: fdevaibhavpal@gmail.com
- **GitHub**: [fdevaibhavpal](https://github.com/fdevaibhavpal)

---

### License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this project, provided proper credit is given to the original author. For more details, see the [LICENSE](./LICENSE) file included in this repository.

