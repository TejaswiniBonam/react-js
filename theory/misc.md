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



* during return()
* Without parentheses, any code on the lines after return will be ignored! IF we have more than one element to return, parenthesis is MUST

* components can be nested
# what we see vs browser see
```js
 <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
```
```js
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```
* **Components can render other components, but you must never nest their definitions:**

https://react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state

```js
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}
```

* when child component needs data pass it as props from parent not the other way around

* Your React application begins at a “root” component. Usually, it is created automatically when you start a new project. 


* * Objects are not valid as React child



The Real DOM only updates if the Virtual DOM comparison (diffing) finds changes.

Initial Render: Virtual DOM is created → Real DOM is updated (full paint).

Re-renders: New Virtual DOM is created → Compared with old one → Only the changed parts update in the Real DOM.


import {useState} from 'react';
export default function EditProfile() {
  const [f, setF] = useState('Jane');
  const [l, setL] = useState('Jacobs');
  const [b, setB] = useState(true);
  function fchange(e){
    setF(e.target.value);
  }
  function lchange(e){
    setL(e.target.value);
  }
  function handles(e){
    e.preventDefault();
    setB(!b);
   // e.textContent = b ? 'Save Profile' : 'Edit Profile'; WE CANT MANIPULATE DOM DIRECTLY.. so use STATE
  }
  
  return (
    <form>
      <label>
        First name:{' '}
        {!b && <b id='fb'>{f}</b>}
        {b && <input value={f} onChange={e=>fchange(e)}/> }
      </label>
      <label>
        Last name:{' '}
        {!b && <b id='lb'>{l}</b> }
        {b && <input value={l} onChange={e=>lchange(e)}/> }
      </label>
      <button id='bb' type="submit" onClick={e=>handles(e)} >
        {b ? 'Save Profile' : 'Edit Profile'}
      </button>
      <p><i>Hello, {f} {l}!</i></p>
    </form>
  );
}



import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody> 
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
  id: 1,
  name: 'Dal',
  description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];


import { useState } from 'react';

export default function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />} 
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

-----------
import { useState } from 'react';

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
  if (isFancy) {
    return (
      <div>
        <Counter isFancy={true} />
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked)
            }}
          />
          Use fancy styling
        </label>
      </div>
    );
  }
  return (
    <div>
      <Counter isFancy={false} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
-----------------
import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field label="Last name" /> 
        <Field label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" /> 
        <Field label="Last name" />
        {checkbox}
      </>
    );    
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}

-------------------







