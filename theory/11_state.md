# STate
* A component's Memory
* **Isolated** (If u render same component multiple times, each component will have their own state)
* **private** - state belongs to its component only, unlike prop parent component dones't know anything about state of it's child
* Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

* state is not like a regular variable that disappears after your function returns. State actually “lives” in React itself

```jsx
import { useState } from "react";

export default function(){
    //let idx = 0;
    const [idx, setIdx] = useState(0);
    console.log(idx);
    const arr = ['a', 'b', 'c', 'd']
    // THE BELOW CODE DOESN"T UPDATE h1 content BECUZ idx is a local element and To change h1 content
    // React should rerender But change in local varaible can't be noticed by react so it doesn't rerenders SO U SHOULD USE STATE
    return(
        <>
        <button onClick = {()=>{
            //idx+=1;
            setIdx(idx + 1);
            console.log(idx);}}>
            Click Me
        </button>
        <h1> HI This is {arr[idx]}</h1>
        </>

    );
}
```
* Local variables don’t persist between renders They reset They dont maintain previous values
* But State does.. In the above even if the component rerenders the useState(0); wont execute again cuz it was assigned a value before rerender

* The `useState()` Hook provides these (retaining data between renders, And a state setter function to update the variable and TRIGGER REACT TO RERENDER)

# steps
* `import {useState} from 'react';`
* define the state with setter method as well `const [state_name, setState_name] = useState(<initialVale>);`
* And whenever u need to modify the state `setStatename(new_vale);`


# HOOK
* function starting with `use`;
* Hooks are special functions that are only available while React is rendering
* **Hooks—functions starting with use—can only be called at the top level of your components** or your own Hooks
* For every render , useState returns 2 things [state that was stored in previous render if Not, the initial pvalue passed and state setter function]




# multiple states in one comp
YES YOU CAN
* If those states are unrelated - you can maintain individual states
* If they are related like form details or smth like that, You can combine them and make an object as a state


### we only use `useState(someVale)` when we have multiple states in here, How does react know which state we are calling?

* Internally, React holds an array of state pairs for every component. It also maintains the current pair index, which is set to 0 before rendering. Each time you call useState, React gives you the next state pair and increments the index. 



## what if you want sibling states to be in sync/same?
* remove states from the siblings and add the state to it's nearest parent

* Hooks must be called unconditionally and always in the same order! so always put them at top



# IMP EXAMPLE
* when we put `setSomething()` State updates don’t happen immediately—they’re scheduled for the next render.

# what happens when  setState() is encountered
🔁 Step-by-step Flow (Functional Component using useState)
Your component runs, and inside it, setState() is called.

React marks the component as needing an update (scheduling a re-render).

React finishes the current function execution — it does not interrupt the current render.

After that, React triggers a re-render of the component with the updated state.

The entire function runs again (because functional components are just functions), now with the new state value.



```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```
* The above Function should give 3 after rerendering  when the button is clicked 
* But it gives 1
* Setting state only changes it for the next render.







# render and commit
* the process of requesting and serving UI has 3 steps
        * Triggering a redner
        * Redering the comp
        * commiting it to DOM

## initial render
* when app starts.. Initial render should be triggered.
* It is done by calling `createRoot` in main.jsx or index.js
```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
* it creates root from <div id='root'> in index.html
* and It goes for root.render() this is initial trigger render
* If it misses, whole thing disappears


## react renders comps
* render - react calling comps
* On initial render(root.render) App component will be rendered and for subsequesnt renders chikd components will be called
* Rerenders occurs when prop changes or state changes.. and when it rerenders.. It's childs and grand childs will be rerendered as well
* During the initial render, React will create the DOM nodes for <section>, <h1>, and three <img> tags.
* During a re-render, React will calculate which of their properties, if any, have changed since the previous render. It won’t do anything with that information until the next step, the commit phase.



* **Rendering must always be a pure**


## reeact commits changes to the DOM

* After rendering (calling) your components, React will modify the DOM.
* For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
* For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
* React only changes the DOM nodes if there’s a difference between renders. 
```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // Triggers a re-render every second
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Current time: {time.toLocaleTimeString()}</h1>
      <input type="text" placeholder="Type something..." />
    </div>
  );
}
```
* Every second time changes which triggers rerender every sec
* React compares the old and new virtual DOM.
* <h1> keeps updating
* But <input> doesn't update cuz none of it's attributes changed over time
* react preserves uncontrolled input state



# state as a snapshot
* state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.
* tate is not like a regular variable that disappears after your function returns. State actually “lives” in React itself

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```
* Notice that number only increments once per click!
* **TRYE**
* LETS SUBSTITUTE what happens when u click
* setNumber(number + 1): number is 0 so setNumber(0 + 1).
* React prepares to change number to 1 on the next render.
* setNumber(number + 1): number is 0 so setNumber(0 + 1).
* React prepares to change number to 1 on the next render.
* setNumber(number + 1): number is 0 so setNumber(0 + 1).
* React prepares to change number to 1 on the next render.
* Even though you called setNumber(number + 1) three times, in this render’s event handler number is always 0, so you set the state to 1 three times.


# STATE OVER TIME
```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        alert(number);
      }}>+5</button>
    </>
  )
}
```
* Here, Alert sends the previous number rather than updated one cuz, the number changes for the next render
* `setNumber(0 + 5); alert(0);` subsitution
## async
```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}
```
* Even tho u use async methods like setTimeout.. The rerender happens ignoring setTimeOUt.
* BUT, AGAIN SUBSTITUTE.. the setTimeOUt was caleld in the previous render so the call was `setTimeOut(alert(old_number));`
* so IT DOESN't CHANGE
## TRY THIS
```jsx
export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
```
* `look up for e in js, which is for element where the event has happened and form things in js etc`

* **React keeps the state values “fixed” within one render’s event handlers.**



# Updating Objects in state
* state can hold any JS value (objects, functions (funcitons are values too) etc)

* In case of objects, we can't update them just lik ethatt.. we need to make a new one and pass it

## mutation
* we know `numbers, strings, booleans` these are `Immutable` (means Once the things are created at a location the value can't be changed However the variable pointing to it can change it's direction to smwhere else)
* **mutation** - changing variable value
* **mutable things** - array, object, function, dates
* so `setNumber(5);` means changing number from smth to 5, but the number did not change itself, but state is replaced with 5. cuz numbers are Immutable
* But we know Objects are Immutable.. so it is possible to change object which is called `Mutation`
* BUT, In REact you should behave as if they are Immutable.. so **Instead of Mutating them, you should Always REPLACE them**

* Becuase **STATE SHOULD BE TREATED AS READ-ONLY**.. so is an object in state

```jsx
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        position.x = e.clientX;
        position.y = e.clientY;
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );

```
* Here, there is a red dot on the screen and when u move mouse, the dot should move along as well
* for that, we used mouse event.. and we `MUTATED` the object value with the mouse pointer coordinates
* we mutated MEANS `we did not use setState() to update the location`
* so react will not notice that the state has changed???
* SOO `TO TRIGGER A RE-RENDER CREATE A NEW OBJECT AND PASS IT USING setState()` 

```jsx
onPointerMove={e => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  });
}}
```
* This will work, as the setState() replaced the state and trigger re-render

## Local Mutation?
* in the first case, u mutated the existing state.., which was unnoticed by react
* But u can do local mutation too like.. the below code doesn't affect anything bad
```jsx
const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);
```
* Mutation isn't a problem as long as u dont touch existing state


## copying objects with spread syntax
* let say the object we have in a state has very big attributes soo creating everything again as a new object and setting state is kinda hard.. ESPECIALLY IF U WANNA CHANGE JUST ONE ATTRIBUTE
* Soo USE SPREAD
```jsx
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});
```
* `Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.`

## updating nested object
* below is the object and u need yo but city to delhi
```jsx
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```
* below is how to do it
```jsx
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
//ORRRR
setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```


## Using same event handler for multiple Fields (In Objects case ofc)
* Before
```jsx
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
```
* After
```jsx
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
```
* Instead of writing event Handlers for each like email, fistName, LastName.. we can use dynamic name using `[]` **check objects in js again**




# OKAY BUT ARE OBJECTS REALLY NESTED?
* NO wrong word.. See
```jsx
let obj = {
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
};
//YOU might say it is nested objects.. like artwork obj is in another obj
// BUT NO.. They are just two different Objects Like below
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};
//The obj1 object is not “inside” obj2. For example, obj3 could “point” at obj1 too:
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};

let obj3 = {
  name: 'Copycat',
  artwork: obj1
};
//If you were to mutate obj3.artwork.city, it would affect both obj2.artwork.city and obj1.city. This is because obj3.artwork, obj2.artwork, and obj1 are the same object. 
//This is difficult to see when you think of objects as “nested”. Instead, they are separate objects “pointing” at each other with properties.
//POINTING NOT NESTED
```

