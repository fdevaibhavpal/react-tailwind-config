#!/usr/bin/env node
import { execa } from "execa";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
const configureTailwind = async () => {
    const spinner = ora();
    try {
        const projectRoot = process.cwd();
        spinner.start(chalk.blue("Installing Tailwind CSS and dependencies..."));
        await execa("npm", ["install", "-D", "tailwindcss", "postcss", "autoprefixer"], {
            cwd: projectRoot,
        });
        spinner.succeed(chalk.green("Tailwind CSS and dependencies installed successfully!"));
        spinner.start(chalk.blue("Initializing Tailwind CSS configuration..."));
        // Initialize Tailwind configuration
        await execa("npx", ["tailwindcss", "init", "-p"], { cwd: projectRoot });
        spinner.succeed(chalk.green("Tailwind CSS initialized successfully!"));
        // Verify tailwind.config.js creation
        const configPath = path.resolve(projectRoot, "tailwind.config.js");
        if (!fs.existsSync(configPath)) {
            throw new Error(`Failed to create tailwind.config.js at ${configPath}`);
        }
        spinner.succeed(chalk.green(`tailwind.config.js created at: ${configPath}`));
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
        spinner.succeed(chalk.green("tailwind.config.js updated successfully!"));
        const cssPath = path.resolve(projectRoot, "src/index.css");
        const tailwindDirectives = `
@tailwind base;
@tailwind components;
@tailwind utilities;
    `;
        spinner.start(chalk.blue(`Checking if src/index.css exists at: ${cssPath}`));
        if (fs.existsSync(cssPath)) {
            const existingCSS = fs.readFileSync(cssPath, "utf-8");
            if (!existingCSS.includes("@tailwind")) {
                const updatedCSS = `${tailwindDirectives.trim()}\n\n${existingCSS}`;
                fs.writeFileSync(cssPath, updatedCSS, "utf-8");
                spinner.succeed(chalk.green("Added Tailwind directives to src/index.css!"));
            }
            else {
                spinner.warn(chalk.yellow("Tailwind directives already present in src/index.css!"));
            }
        }
        else {
            spinner.warn(chalk.yellow("src/index.css not found. Creating the file with Tailwind directives..."));
            fs.writeFileSync(cssPath, tailwindDirectives.trim(), "utf-8");
            spinner.succeed(chalk.green("Created src/index.css with Tailwind directives!"));
        }
        spinner.succeed(chalk.green("Tailwind CSS setup completed successfully! You can now run your app with:"));
        console.log("\n" + chalk.cyan("npm run dev") + "\n");
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(chalk.red("Error setting up Tailwind CSS:", message));
        process.exit(1);
    }
};
configureTailwind();
