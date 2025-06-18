* VITE(??)

react-dom-client.development.js:24027 Each child in a list should have a unique "key" prop.

Check the render method of `Lists`. See https://react.dev/link/warning-keys for more information.


* .jsx???




* 
import './App.css';

function App() {
  
   
   const name = "Siri";
   console.log(name);
   return (
    <>
    
    <h1> WELCOME </h1>
    </>
   );

  
}

export default App;


This is App.js

And when I checked console.. Siri is printed 2 times.. Like How did it print 2 times?? Isn't it just one time?


* WHY CANT I GIVE AN INTEGER AS A PROP VALUE
<TicTacToe value = 1>======> ERROR
* props child to parent?


ERROR
boxClick is not defined
ReferenceError: boxClick is not defined
    at __WEBPACK_DEFAULT_EXPORT__ (http://localhost:3000/main.58292188339486a04946.hot-update.js:34:14)
    at react-stack-bottom-frame (http://localhost:3000/static/js/bundle.js:15864:18)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:6074:20)
    at updateFunctionComponent (http://localhost:3000/static/js/bundle.js:7767:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:8353:16)
    at runWithFiberInDEV (http://localhost:3000/static/js/bundle.js:3845:68)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:10426:93)
    at workLoopSync (http://localhost:3000/static/js/bundle.js:10319:38)
    at renderRootSync (http://localhost:3000/static/js/bundle.js:10303:7)
    at performWorkOnRoot (http://localhost:3000/static/js/bundle.js:10067:42)



    RENAMING A FILE??????????????????????



# TriggerRerender.jsx:18 Uncaught TypeError: Cannot set properties of null (setting 'className') at default (TriggerRerender.jsx:18:37)
* Trying to set a className on an element before it's rendered
* The element you're trying to access doesn't exist in the DOM YET
* Using document.getElementById() or similar method that returns null
* Trying to access a ref before it's initialized
```jsx
const element = document.getElementById('my-element');
if (element) {
  element.className = 'new-class';
}
// or use useRef()
```


# Okay, I wanna count and print the count of rerendering in my console can I do that? can I make a count that tracks the number of time the page got rerendered
    