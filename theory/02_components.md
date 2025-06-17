# components
* React applications are built from isolated pieces of UI called components.
* React component is a JavaScript function that you can sprinkle with markup. 
* core concepts of react
* **REUSABLE**
* Components can be 
        * as small as a button, or 
        * as large as an entire page.
        * nested
```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

* React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.
* There are open source components provided by react **(like chakra UI, Material UI)**


## traditional way
* web developers marked up their content and then added interaction by sprinkling on some JavaScript
## react way
* React puts interactivity first while still using the same technology: a React component is a JavaScript function that you can sprinkle with markup.


# steps
* define component
* add markup (jsx)
* export component (default) (got to import_export.md)
* **React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!**

```jsx
return <p> Hi </p>; //sngle line no ()
return (
    <div>
    <p> hi </p>
    </div>
);
```
* **Without parentheses, any code on the lines after return will be ignored!**
* Now import the component into the desired file and use it


* **what browser sees is all the calculated code**

# nesting and organizing components
* Components are regular JavaScript functions, so you can keep multiple components in the same file. (but atmost one default export and remaining named export)
* We can have parent-child-granchild .... components


# IMP
* By Nested, we mean, we can render Other components in One .. NOT DEFINING ONE IN ANOTHER
```jsx
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ... THIS IS WRONG< THAT WONT BECOME A COMPONENT BUT AN INNER FUNCTION THATS IT>
}
```
* define every component TOP level ONly
* When a child component needs some data from a parent, **pass it by props** instead of nesting definitions.
* Your React application begins at a **“root”** component. Usually, it is created automatically when you start a new project. 

* you won’t only use components for reusable pieces like buttons, but also for larger pieces like sidebars, lists, and ultimately, complete pages! 
* React-based frameworks take this a step further. Instead of using an empty HTML file and letting React “take over” managing the page with JavaScript, they also generate the HTML automatically from your React components. This allows your app to show some content before the JavaScript code loads.


