export const appTemplate = `
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
