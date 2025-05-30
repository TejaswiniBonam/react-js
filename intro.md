* It is used for building user interfaces, especially single-page applications.
* Developed and maintained by Facebook.
* Uses a component-based architecture.
* Allows efficient updating and rendering of UI components.

## Why React

React is a popular JavaScript library for building user interfaces. It enables developers to create fast, interactive, and scalable web applications by using reusable components and efficient rendering techniques.

## Structure of a React App

A typical React app has the following structure:

```
my-react-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

- **public/**: Contains static files like `index.html`.
- **src/**: Contains JavaScript/JSX source code, including components.
- **components/**: Folder for reusable UI components.
- **App.js**: Main application component.
- **index.js**: Entry point that renders the app.
- **package.json**: Project metadata and dependencies.
- **node_modules/**: Installed npm packages.

This structure helps organize code and assets for scalable development.


## Basic Commands

Here are some basic commands to get started with a React app using [Create React App](https://create-react-app.dev/):

```bash
# Create a new React app
npx create-react-app my-react-app

# Navigate into your app directory
cd my-react-app

# Start the development server
npm start

# Build the app for production
npm run build

# Run tests
npm test

# Install a new package (example: axios)
npm install axios
```

These commands help you set up, run, and manage your React project efficiently.