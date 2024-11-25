export declare const appTemplate = "\nimport \"./App.css\";\n\nfunction App() {\n  return (\n    <div className=\"flex items-center justify-center\">\n      <div className=\"max-w-4xl w-full px-10 py-12 bg-white rounded-lg shadow-md\">\n        <h1 className=\"text-3xl font-bold text-[#37BCF8] mb-4 text-center\">\n          React Tailwind Config\n        </h1>\n        <p className=\"text-gray-900 font-medium mb-4\">\n          A CLI tool to simplify and speed up the process of setting up Tailwind\n          CSS in your Vite React projects. Automates configurations, installs\n          dependencies, and gets you started in seconds!\n        </p>\n        <ul className=\"text-left text-sm text-gray-700 list-disc list-inside mb-6\">\n          <li>Automates Tailwind CSS setup for Vite + React.</li>\n          <li>\n            Creates a pre-configured <code>tailwind.config.js</code> file.\n          </li>\n          <li>Adds required Tailwind directives to your CSS.</li>\n        </ul>\n\n        <h2 className=\"text-xl font-semibold text-gray-800 mb-3\">\n          Installation Steps:\n        </h2>\n        <ol className=\"text-left text-sm text-gray-700 list-decimal list-inside mb-6\">\n          <li>\n            Create a new Vite React project (if not already done):\n            <code className=\"block bg-gray-200 p-1 rounded mt-1\">\n              npm create vite@latest my-app -- --template react\n            </code>\n          </li>\n          <li>\n            Navigate to your project directory:\n            <code className=\"block bg-gray-200 p-1 rounded mt-1\">\n              cd my-app\n            </code>\n          </li>\n          <li>\n            Install react-tailwind-config:\n            <code className=\"block bg-gray-200 p-1 rounded mt-1\">\n              npm install react-tailwind-config\n            </code>\n          </li>\n          <li>\n            Run the Tailwind setup command:\n            <code className=\"block bg-gray-200 p-1 rounded mt-1\">\n              npx react-tailwind-config\n            </code>\n          </li>\n        </ol>\n        <p className=\"relative text-sm text-gray-700 mb-6 bg-yellow-100 border-l-4 border-yellow-300 p-4 rounded-lg animate-pulse\">\n          <strong className=\"font-bold text-yellow-700\">Important:</strong> If\n          you would like to customize or completely replace the generated{\" \"}\n          <code className=\"bg-gray-200 p-1 rounded font-mono\">\n            App.tsx/App.jsx\n          </code>{\" \"}\n          file, feel free to do so. The CLI sets up a sample file to get you\n          started quickly.\n        </p>\n\n        <div className=\"grid place-items-center\">\n          <a\n            href=\"https://www.npmjs.com/package/react-tailwind-config\"\n            target=\"_blank\"\n            className=\"w-1/2 mt-2 block text-center px-5 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:text-white font-semibold rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600\"\n            rel=\"noopener noreferrer\"\n          >\n            View on npm\n          </a>\n        </div>\n      </div>\n    </div>\n  );\n}\nexport default App;\n\n";