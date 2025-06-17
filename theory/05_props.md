# props
* React components use props to communicate with each other.
* arguments to ur components
* Props (short for "properties") are a way to pass data from a parent component to a child component in React. They are read-only and help make components reusable and dynamic.
* Props are the info that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an `<img>`
* The props you can pass to an `<img>` tag are predefined (ReactDOM conforms to the HTML standard). `But you can pass any props to your own components,`

## characteristics
* Immutable - child component can't modify its props, Wont throw error if u does, but it's a bad practice
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



# passing JSX as children ???????
* common to nest built-in browser tags `<div> <img /> </div>`
* smtimes we nest Our own comps in same way
```jsx
<Comp1>
    <Comp2 />
</Comp1>
```
* Soo `Comp2` is INSIDE `Comp1`
* That means, We should Send `Comp2` to `Comp1` as a prop which is called `children`
* `children` **word is a must**, unlike `props` where we can replace it with any other word.
```jsx
function Comp1({ children}){
  return(
    <div>
      {children}
    </div>
  )
}
function Comp2(){
  return <h1> HII </h1>
}
function Comp3(){
  return(
    <Comp1>
        <Comp2>
    </Comp1>
  )
}
```
* Not Just ANother element, But We can ALso have Any other tags inplace of `Comp2`.
* Basically, `Comp1` DOESN't need to Know whatever this `children` is!!!


# props may change over time?
* YES THEY CAN
```js
export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}
```
* here {time} is current time
* CHanging props didn't throw error to me
* It just affected all over other components who get the same props
* becuz, prop name is just a reference to the original object location.. so when we change it.. It will change ALL over..













