#!/usr/bin/env node

import { execa } from "execa";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const configureTailwind = async (): Promise<void> => {
  try {
    const projectRoot = process.cwd(); 
    console.log(chalk.blue("Installing Tailwind CSS and dependencies..."));

    await execa("npm", ["install", "-D", "tailwindcss", "postcss", "autoprefixer"], {
      cwd: projectRoot,
    });
    console.log(chalk.green("Tailwind CSS and dependencies installed successfully!"));

    console.log(chalk.blue("Initializing Tailwind CSS configuration..."));

    // Initialize Tailwind configuration
    await execa("npx", ["tailwindcss", "init", "-p"], { cwd: projectRoot });
    console.log(chalk.green("Tailwind CSS initialized successfully!"));

    // Verify tailwind.config.js creation
    const configPath = path.resolve(projectRoot, "tailwind.config.js");
    if (!fs.existsSync(configPath)) {
      throw new Error(`Failed to create tailwind.config.js at ${configPath}`);
    }
    console.log(chalk.green(`tailwind.config.js created at: ${configPath}`));

    const contentConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
    `;
    fs.writeFileSync(configPath, contentConfig.trim(), "utf-8");
    console.log(chalk.green("tailwind.config.js updated successfully!"));

  
    const cssPath = path.resolve(projectRoot, "src/index.css");
    const tailwindDirectives = `
@tailwind base;
@tailwind components;
@tailwind utilities;
    `;

    console.log(chalk.blue(`Checking if src/index.css exists at: ${cssPath}`));

    if (fs.existsSync(cssPath)) {
      const existingCSS = fs.readFileSync(cssPath, "utf-8");
      if (!existingCSS.includes("@tailwind")) {
        const updatedCSS = `${tailwindDirectives.trim()}\n\n${existingCSS}`;
        fs.writeFileSync(cssPath, updatedCSS, "utf-8");
        console.log(chalk.green("Added Tailwind directives to src/index.css!"));
      } else {
        console.log(chalk.yellow("Tailwind directives already present in src/index.css!"));
      }
    } else {
      console.log(chalk.yellow("src/index.css not found. Creating the file with Tailwind directives..."));
      fs.writeFileSync(cssPath, tailwindDirectives.trim(), "utf-8");
      console.log(chalk.green("Created src/index.css with Tailwind directives!"));
    }

    console.log(chalk.green("Tailwind CSS setup completed successfully! You can now run your app with:"));
    console.log(chalk.cyan("npm run dev"));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(chalk.red("Error setting up Tailwind CSS:", message));
    process.exit(1);
  }
};

configureTailwind();
