# event handlers
* Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.
* Usually defined inside ur component definitions
* starts with `handle` and follows by event name like `handleClick, handleHover, ...`


## adding event handlers
* define the handling function in the needed component definition
* and then pass it as a prop to that very needed JSX tag
* Or you can even define the handler function insid JSX tag too (but if it's too big it's better to define that inside comp definition)
```jsx
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
    //this function is the event Handler
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
    //OR , Or also u can use arrow function
    <button onClick={function handleClick() {
  alert('You clicked me!');
        }}> Click Me </button>
  );
}
```

* **Functions passed to event handlers must be passed, not called.**
* `onClick = {handleClick()}` calls the function while `onClick = {handleClick}` passes the function. so be careful u should pass NOT CALL
* The first one FIRES the funciton immediately during **rendering** without any clicks cuz js inside `jsx {}` executes right away
* And the second, tells react to remember it and ONLY CALL THE FUNCTION when user clicks

```jsx
<button onClick={() => alert('THIS IS CRRECT  PASSING ')}> 
<button onClick={alert('WRONG _ CALLING it fires every time the component renders not when clicked')}>
```

* so if u wanna define ur handler inline, wrap it in an anonymous function `(()=>{} or function (){}`


# props in event handlers
* as handlers are defined in side the comp, they also have acces to its props

```jsx
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}
```

# u can pass event handlers as PROPS too
* you’ll want the parent component to specify a child’s event handler. 
* Consider child buttons: depending on where you’re using a Button component, you might want to execute a different function—perhaps one plays a movie and another uploads an image.

```jsx
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }
    // NOW This handlePlayClick will be sent to that button component as a PROP

  return (
//AND HERE, Instead of onClick anything else words work too as this is a react component not a html tag but onClick suits better
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
```

# naming event Handler props
* as mentioned in the above code,Built-in components like <button> and <div> only support browser event names like onClick.
* when you’re building your own components, you can name their event handler props any way that you like.
* By convention, event handler props should start with on, followed by a capital letter. and the event name soo at the end it turned out to be onClick again.. but ur wish u can go with onTap, onSmash etc

```jsx
function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
```

* `Make sure that you use the appropriate HTML tags for your event handlers. For example, to handle clicks, use <button onClick={handleClick}> instead of <div onClick={handleClick}>. Using a real browser <button> enables built-in browser behaviors like keyboard navigation. If you don’t like the default browser styling of a button and want to make it look more like a link or a different UI element, you can achieve it with CSS.`


# Event Propagation
* Okayy, so What if The parent component and children component (which lays inside of parent) have their own EVENT handlers for same event
* Like if u click child component which as it's handler and that also mean u r clicking parent too and parent also have it's own handler for clickas well
* In that Scenario.. The event handlers `crawl or bubble or propagate` Up the tree
* like `child handler executes and then parent handler executes and so on` The handlers crawls up the tree
```jsx
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
      {/*if u click this where 2 child buttons are not present  alert says u clicked on the tool bar*/}
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
        {/*if u click this button first the alert will say playing after that second alert says u clicked on the tool bar*/}
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
        {/*if u click this button first the alert will say uploading after that second alert says u clicked on the tool bar*/}
      </button>
    </div>
  );
}
```

* **All events propagate in React except `onScroll`, which only works on the JSX tag you attach it to. SEARCH FOR AN EXAMPLE**


# stopping propagation
* Event handlers receive an event object as their only argument.
* By convention, it’s usually called e, which stands for “event”. 
```jsx
element.addEventListener('click', function(e) {
  // Event type (click, mouseover, keydown, etc.)
  console.log('Event type:', e.type);
  
  // Element that triggered the event
  console.log('Target:', e.target);
  
  // Element that the handler is attached to (may differ from target)
  console.log('Current target:', e.currentTarget);
  
  // Mouse position
  console.log('Coordinates:', e.clientX, e.clientY);
  
  // Keyboard events
  if (e.type === 'keydown') {
    console.log('Key pressed:', e.key, 'Code:', e.code);
  }
  
  // Prevent default behavior (like form submission)
  e.preventDefault();
  
  // Stop event bubbling up the DOM
  e.stopPropagation();
});
```
*  If you want to prevent an event from reaching parent components, you need to call `e.stopPropagation() `

```jsx
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
      {/*if u click this where 2 child buttons are not present  alert says u clicked on the tool bar*/}
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
        {/*if u click this it says Playing*/}
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
        {/*if u click this it says Uploading*/}
      </Button>
    </div>
  );
}
```
* **Steps**
* onClick is passed to each
* When Any of the `<Button />` is clicked - It goes to the component definition along with the handler prop which is defined in `<ToolBar />` and a line says `e.stopPropagation()` which resists the event handler to bubble up the tree.
* Hence, Only child handlers run


# phases in Event Propagation
## Capture Phase
* Propagates from Parent to child until it hit the right element where handling event is needed
## Target Phase
* Hitting the right element for event handling
## Bubble Phase
* Bubbling up the tree to the parent components
```jsx
function App() {
  return (
    <div
      onClickCapture={() => console.log("Outer (Capture)")}
      onClick={() => console.log("Outer (Bubble)")}
      style={{ padding: "30px", background: "#eee" }}
    >
      <button
        onClickCapture={() => console.log("Button (Capture)")}
        onClick={() => console.log("Button (Bubble)")}
      >
        Click Me
      </button>
    </div>
  );
}
```
* Output goes like
```txt
Outer (Capture)
Button (Capture)
Button (Bubble)
Outer (Bubble)
```


# preventing default behaviour
* Some browser events have default behavior associated with them. For example, a <form> submit event, which happens when a button inside of it is clicked, will reload the whole page by default:
* You can call e.preventDefault() on the event object to stop this 
```jsx
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}
```


## side effects?
* event handlers don’t need to be pure, so it’s a great place to change something
* change an input’s value in response to typing, or change a list in response to a button press. 
* In order to change some info u need a way to store it which is `State - a component's memory`











