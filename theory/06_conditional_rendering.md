# conditional Rendering
```jsx
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;
```
* branching logic based on conditions


# Conditionally returning nothing with null
* In some situations, you won’t want to render anything at all.

```jsx
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

# Conditionally including JSX
* In above Example it violates DRY(Dont repeat urself)
```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);
```
```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}
```

# logical and operator `&&`
*  when you want to render some JSX when the condition is true, or render nothing otherwise. 
```jsx
return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);
```

* **Don’t put numbers on the left side of &&. To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.**
* `For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself! check logical AND and Bitwise AND`
* To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.