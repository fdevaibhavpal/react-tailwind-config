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
        // Overwrite or create App.tsx or App.js with the card content
        const appFilePathTs = path.resolve(projectRoot, "src/App.tsx");
        const appFilePathJs = path.resolve(projectRoot, "src/App.jsx");
        const appTemplate = `
        import "./App.css";
        
        function App() {
          return (
            <div className="flex items-center justify-center">
              <div className="max-w-4xl w-full px-10 py-12 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-[#37BCF8] mb-4 text-center">
                  React Tailwind Config
                </h1>
                <p className="text-gray-900 font-medium mb-4">
                  A CLI tool to simplify and speed up the process of setting up Tailwind
                  CSS in your Vite React projects. Automates configurations, installs
                  dependencies, and gets you started in seconds!
                </p>
                <ul className="text-left text-sm text-gray-700 list-disc list-inside mb-6">
                  <li>Automates Tailwind CSS setup for Vite + React.</li>
                  <li>
                    Creates a pre-configured <code>tailwind.config.js</code> file.
                  </li>
                  <li>Adds required Tailwind directives to your CSS.</li>
                </ul>
        
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Installation Steps:
                </h2>
                <ol className="text-left text-sm text-gray-700 list-decimal list-inside mb-6">
                  <li>
                    Create a new Vite React project (if not already done):
                    <code className="block bg-gray-200 p-1 rounded mt-1">
                      npm create vite@latest my-app -- --template react
                    </code>
                  </li>
                  <li>
                    Navigate to your project directory:
                    <code className="block bg-gray-200 p-1 rounded mt-1">
                      cd my-app
                    </code>
                  </li>
                  <li>
                    Install react-tailwind-config:
                    <code className="block bg-gray-200 p-1 rounded mt-1">
                      npm install react-tailwind-config
                    </code>
                  </li>
                  <li>
                    Run the Tailwind setup command:
                    <code className="block bg-gray-200 p-1 rounded mt-1">
                      npx react-tailwind-config
                    </code>
                  </li>
                </ol>
                <p className="relative text-sm text-gray-700 mb-6 bg-yellow-100 border-l-4 border-yellow-300 p-4 rounded-lg animate-pulse">
                  <strong className="font-bold text-yellow-700">Important:</strong> If
                  you would like to customize or completely replace the generated{" "}
                  <code className="bg-gray-200 p-1 rounded font-mono">
                    App.tsx/App.jsx
                  </code>{" "}
                  file, feel free to do so. The CLI sets up a sample file to get you
                  started quickly.
                </p>
        
                <div className="grid place-items-center">
                  <a
                    href="https://www.npmjs.com/package/react-tailwind-config"
                    target="_blank"
                    className="w-1/2 mt-2 block text-center px-5 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:text-white font-semibold rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600"
                    rel="noopener noreferrer"
                  >
                    View on npm
                  </a>
                </div>
              </div>
            </div>
          );
        }
        export default App;
        `;
        if (fs.existsSync(appFilePathTs)) {
            fs.writeFileSync(appFilePathTs, appTemplate.trim(), "utf-8");
            spinner.succeed(chalk.green("Success! We've updated App.tsx with a demo card to showcase Tailwind CSS."));
        }
        else if (fs.existsSync(appFilePathJs)) {
            fs.writeFileSync(appFilePathJs, appTemplate.trim(), "utf-8");
            spinner.succeed(chalk.green("Success! We've updated App.jsx with a demo card to showcase Tailwind CSS."));
        }
        else {
            spinner.warn(chalk.yellow("Neither App.tsx nor App.js was found. Please ensure your React project is initialized properly."));
        }
        spinner.succeed(chalk.green("\n Tailwind CSS setup completed successfully!" + "\n You can now run your app with:"));
        console.log("\n" + chalk.cyan("npm run dev") + "\n");
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(chalk.red("Error setting up Tailwind CSS:", message));
        process.exit(1);
    }
};
configureTailwind();
