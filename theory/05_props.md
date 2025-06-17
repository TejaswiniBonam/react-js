# props
* React components use props to communicate with each other.
* arguments to ur components
* Props (short for "properties") are a way to pass data from a parent component to a child component in React. They are read-only and help make components reusable and dynamic.
* Props are the info that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an `<img>`
* The props you can pass to an `<img>` tag are predefined (ReactDOM conforms to the HTML standard). `But you can pass any props to your own components,`

## characteristics
* Immutable - child component can't modify its props
* customizable - parent comp defines it 
* Any data type - values, pbjects, functions etc etc


# steps
* pass props to a child component
* read props inside child

```jsx
export default function Parent() {
  return (
    <Child
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
function Child({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
//OR ANOTHER WAYYY
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```
* Don’t miss the pair of { and } curlies inside of ( and ) when declaring props. This syntax is called “destructuring” 



# default Value for a Prop
* If you want to give a prop a default value to fall back on **when no value is specified, Only when that prop is missing or not given by parent or if u pass `size={undefined}`**
* But If u use `size={null} or size={0}` **default value will not be used** (remember? when u mentioned null u intentionally want it null, ?? abput {0})
```jsx
function Avatar({ person, size = 100 }) {
  // ...
}
```


# forwarding props (easier way)
```jsx
function Parent({a, b, c, d}){
    return(
        <Child a={a}, b={b}, c={c}, d={c} />
    )
}
// INSTEAD OF DOING THAT YOU CAN DO smth using SPREAD OPERATOR
function Parent(propss){
    return(
        <Child {...propss} />
    )
}
```



# passing JSX as children
* common to nest built-in browser tags `<div> <img /> </div>`
* smtimes we nest Our own comps in same way
```jsx
<Comp1>
    <Comp2 />
</Comp1>
```





