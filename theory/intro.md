# React

* It is used for building UI, especially single-page applications.

* **Singple Page app** - a web app which dynamically rewrites current page rather than loading Entier thing from server- faster

* Component based architecture (reusable, modular components)
* Developed and maintained by Facebook.
* Uses a component-based architecture.
* Allows efficient updating and rendering of UI components.


## Before react
* **direct DOM manipulation** - 
* **full page load** - 
* **sphagetti code** - ??

## Why React

React is a popular JavaScript library for building user interfaces. It enables developers to create fast, interactive, and scalable web applications by using reusable components and efficient rendering techniques.
* resuable
* state management
* SPA
* virtual DOM


## MPA vs SPA
| **MPA** | **SPA** |
|---------|-----------|
| seperate HTML pages | single htmp page |
| content update with full page reload | without |
| Each page has its own real URL | handled using JS routing like react router |
| Amazon shopping web, LinkedIn | Gmail, Twitter, Fb (observe refreshing whenever clicks)|
| slower | faster |
| initial load faster | slower |
| SSR | CSR |
| flicker UX | smooth |






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

## What is a Component?

A **component** in React is a reusable, self-contained piece of UI. Components let you split the UI into independent, reusable parts, and think about each piece in isolation. **SHOULD START WITHA CAPITAL LETTER**

There are two main types of components in React:

### 1. Functional Components

These are JavaScript functions that return JSX (the UI). They are simple and commonly used.

```jsx
// Functional Component Example
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}
```

### 2. Class Components

These use ES6 classes and can hold their own state and lifecycle methods.

```jsx
// Class Component Example
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
```

**Summary:**
- **Functional Components:** Simpler, preferred for most use-cases.
- **Class Components:** Useful when you need advanced features like state and lifecycle methods (though hooks now allow state in functional components).

Components are the building blocks of any React application.


## which is best?


## JSX - JavaScrpt XML
* syntax extenxion , used for UI 
* HTML code in your Javascript
* You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

```jsx
const element = <h1>Hello, World!</h1>;
const name = "Alice";
const greeting = <p>Hello, {name}!</p>;

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

## Adding Styless
* Here we dont use 'class' cuz it's a reserved word Instead we use className
* yiu CAN add LINK tag for css toooo
```jsx
<img className="avatar" />
```
```css
/* In your CSS */
.avatar {
  border-radius: 50%;
}
```
```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

### displaying data
* curly braces lets you **escape back** into js
* can escape to js from JSX tooo like className="avatar" takes you to css BUT <img src = {link}> takes you to link vaiable
* In {} we can put complex things too LIke concatenation of strings etc etc
```jsx
return (
  <h1>
    {user.name}
  </h1>
);
```

## JSX Attributes



## Conditional Rendering
```js
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```
* u can use  conditional ? operator.  as well
```js
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```
* when u dont need ELSE
```js
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

## Rendering Lists
* Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings to keep a track of them. 
* Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.
```js
function Lists(){
    //const colors = ['red', 'green', 'blue', 'yellow'];
    const colors = [{id: 1, name: 'red', rank: 1},
                    {id: 2, name: 'green', rank: 2},
                    {id: 3, name: 'blue', rank: 4},
                    {id: 4, name: 'yellow', rank: 3}];
    const listItems = colors.map((color, index) =>
        <li key={color.id}>
            {color.name} : {color.rank}
        </li>
    );
    return(
        <div>
            <h1>Color List</h1>
            <ul>
                {listItems}
            </ul>
        </div>

    );
}
export default Lists;
```


## Responding to events
* Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. 
* React will call your event handler when the user clicks the button.
```js
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## UPdate Screen
* want your component to “remember” some information and display it.?
* like count how many times a button is clicked??









## What is State?

**State** in React refers to a built-in object that stores property values that belong to a component. When the state of a component changes, React re-renders the component to reflect the new state in the UI.

State is commonly used to keep track of user input, toggle UI elements, or manage dynamic data within a component.

### Example: Using State in a Functional Component

```jsx
import React, { useState } from 'react';

function Counter() {
    // Declare a state variable named 'count', initialized to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```

**Explanation:**
* You’ll get two things from useState: the current state and the function to update it

- `useState(0)` creates a state variable `count` with an initial value of `0`.
- `setCount` is a function used to update the value of `count`.
- When the button is clicked, `setCount(count + 1)` updates the state, causing the component to re-render and display the new count.

State allows components to create interactive and dynamic user interfaces.

```js
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```
* React will call your component function again. This time, count will be 1. Then it will be 2. And so on.

