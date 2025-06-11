`localeCompare()` is a JavaScript string method that compares two strings in the current locale. It returns a number indicating whether the reference string comes before, after, or is the same as the compared string in sort order.

**Syntax:**
```js
str1.localeCompare(str2[, locales[, options]])
```

**Return values:**
- `-1` if `str1` comes before `str2`
- `0` if they are equivalent
- `1` if `str1` comes after `str2`

**Example:**
```js
'a'.localeCompare('b'); // returns -1
'b'.localeCompare('a'); // returns 1
'a'.localeCompare('a'); // returns 0
```


## When to use `.js` and `.jsx`

- Use `.js` for regular JavaScript files that do not contain JSX syntax.
- Use `.jsx` for files that include JSX (JavaScript XML), which is commonly used in React components.

**Best practice:**  
Most modern build tools (like Create React App, Next.js, or Vite) allow you to use either extension for React components. However, using `.jsx` makes it clear that the file contains JSX, improving code readability and maintainability.

**Example:**
- `App.js` – for a file with only JavaScript logic.
- `App.jsx` – for a file containing React component code with JSX.

React Developer Tools 
React DevTools let you check the props and the state of your React components. You can find the React DevTools tab at the bottom of the browser section in CodeSandbox:


LIFTING STATE UP

