# pure js functions
* which minds it's own business
* same input - same output
* like y=2x for every (x, y) there is fixed output
```js
function double(number) {
  return 2 * number;
}
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
```
# side effects
* React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!

```jsx
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```
the output will be
```txt
Tea cup for guest #2
Tea cup for guest #4
Tea cup for guest #6
```
* This component is reading and writing a guest variable declared outside of it. This means that calling this component multiple times will produce different JSX! 
*  if other components read guest, they will produce different JSX, too, That’s not predictable.

* **You can fix this component by passing guest as a prop instead:**
```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
//NOW THIS IS PURE
```
# StrictMode
* in React there are three kinds of inputs that you can read while rendering: props, state, and context. 
* You should always treat these inputs as read-only.
* When you want to change something in response to user input, you should set state instead of writing to a variable. 
* React offers a “`Strict Mode`” in which it calls each component’s function twice during development. 
* By calling the component functions twice, Strict Mode helps find components that break these rules.
* Notice how the original example displayed “Guest #2”, “Guest #4”, and “Guest #6” instead of “Guest #1”, “Guest #2”, and “Guest #3”. 
* pure version works even if the function is called twice every time. 
* Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into <React.StrictMode>. Some frameworks do this by default.

# local mutation
* In the above example, the problem was that the component changed a preexisting variable while rendering.
* That's called `Mutation`
* Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure!
*  it’s completely fine to change variables and objects that you’ve just created while rendering.
```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

```



# side effects
* changing variables outside like the impure function
* Event Handlers: The primary place for side effects in React. These are functions triggered by user actions 
* React components must be pure during rendering—meaning they should only compute and return JSX based on props and state, without causing side effects.
* Event handlers, however, execute later, only when a user interacts with the UI (e.g., clicking a button). They may Modify State or Trigger External Changes??

🔄 Common Side Effects in React
| **Category** |	**Example** |	**Why It’s a Side Effect** |
|------------------|----------------|-------------|
| 1. Data Fetching |	fetch() / axios.get() |	Reads from a server (external source) |
| 2. Manual DOM Manipulation	| document.getElementById().style... |	Directly alters the DOM outside React’s control |
| 3. Event Listeners |	window.addEventListener()	| Interacts with browser APIs outside render cycle |
| 4. Subscriptions	| socket.on(...), Firebase listeners |	Opens a connection or registers a callback |
| 5. Timers	| setTimeout(), setInterval()	| Executes code after delay / repeatedly |
| 6. Local Storage / Session Storage |	localStorage.setItem() |	Writes to browser storage (outside React) |
| 7. Logging / Analytics	| console.log, sendToAnalytics() |	Doesn’t affect rendering, but runs due to component behavior |
| 8. Focus Management	| inputRef.current.focus()	| Manually shifts DOM focus |
| 9. Mutation Observers / Resize Observers |	new ResizeObserver(...)	|Monitors DOM changes from outside React |
| 10. Updating external state |	Updating Redux, Zustand, etc. in some cases	| Affects global state from component logic |
| 11. Animations using imperative APIs	| gsap.to(), anime.js, vanilla JS animations	| Manipulates elements outside React’s declarative model |
| 12. Cleanup logic	| return () => {...} in useEffect	| Necessary to undo subscriptions, timers, etc.|





```jsx
function ShoppingCart() {
  const [items, setItems] = useState([]);

  // Side effect: Modifies external state (React state)
  const handleAddItem = () => {
    setItems([...items, "New Item"]); // ✅ Allowed in event handlers
  };

  // Side effect: Makes an API call
  const handleCheckout = async () => {
    await fetch("/api/checkout", { method: "POST" }); // ✅ Allowed
    alert("Order placed!");
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
```
# WHY PURE
* Your components could run in a different environment—for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.
* You can improve performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
* 








