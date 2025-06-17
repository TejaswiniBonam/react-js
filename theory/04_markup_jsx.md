# markup - JSX
* JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

## we can do this without JSX too
* **with JSX**
```jsx
function MyComponent() {
  return <h1>Hello World</h1>;
}
```
* **without JSX**
```jsx
function MyComponent() {
  return React.createElement("h1", null, "Hello World");
}
```
# react vs JSX
* JSX and React are two separate things. 
* They’re often used together, but you can use them independently of each other. 
* JSX is a syntax extension, while React is a JavaScript library.



# RULES OF JSX
## return single root element
* u generally may have a lot of elements so wrap them in a `div tag` or JSX fragment `<> </>` and then return 
* JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. 
* You can’t return two objects from a function without wrapping them into an array. 
* This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
```jsx
const element = <h1 className="greet">Hello!</h1>;
// This converts to
const element = React.createElement(
  "h1",       // HTML tag name
  { className: "greet" },  // Props (attributes)
  "Hello!"     // Children (text or nested elements)
);
// AND this React.createElement() returns an Object that looks like 
{
  type: "h1",
  props: {
    className: "greet",
    children: "Hello!"
  }
}
```

* one more example
```js
const Greeting = () => (
  <div className="box">
    <h1>Hello</h1>
    <p>React is cool!</p>
  </div>
);
//CONVERTS INTO 
const Greeting = () =>
  React.createElement(
    "div",
    { className: "box" },
    React.createElement("h1", null, "Hello"),
    React.createElement("p", null, "React is cool!")
  );
//FINAL OBJECT
{
  type: "div",
  props: {
    className: "box",
    children: [
      { type: "h1", props: { children: "Hello" } },
      { type: "p", props: { children: "React is cool!" } }
    ]
  }
}
```

## CLose ALl tags
* `<img />`
## camelCase
* JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. 
* In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.
* stroke-widith => strokeWidth
* class => className
* tabindex => tabIndex
* onclick => onClick

https://react.dev/reference/react-dom/components/common

* **For historical and DOM compatibility reasons, attributes that start with aria- and data- are kept lower case with dashes Only Unlike athor attributes**
* aria-label => same
* data-user-id => same







