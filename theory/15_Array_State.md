# Array as state
* Arrays are `mutable`
* BUT TREAT THEM AS IMMUTABLE CUZ STATE IS IMMUTABLE
* Just like objects, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

## update arrays without mutation
* you should treat arrays in React state as read-only. This means that you shouldn’t reassign items inside an array like `arr[0] = 'bird'`
* you also shouldn’t use methods that mutate the array, such as `push() and pop().`
* Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function.
* To do that, you can create a new array from the original array in your state by calling its non-mutating methods like `filter() and map(). `
* Remember? `filter()` and `map()` create new arrays?

| **TABLE** | **avoid (mutates the array)** |	**prefer (returns a new array)** |
|-----------|-----------|---------------------|-----------------|
| adding	| `push` , `unshift` |	`concat`, `[...arr]` spread syntax |
| removing	| `pop, shift, splice` |	`filter, slice` |
| replacing	| `splice, arr[i] = ...` assignment |	`map` | 
| sorting	| `reverse, sort` |	copy the array first |

* `you can also use Immer for this`
* `slice and splice are different` 
* `slice` - lets u copy like indesing
* `splice` - mutates the array(insert/delete)

## Adding to array
```jsx
setArtists( // Replace the state
  [ // with a new array
    ...artists, // that contains all the old items
    { id: nextId++, name: name } // and one new item at the end
  ]
);
//OR IF U WANT TO PUT THE OBJECT FRONT
setArtists([
  { id: nextId++, name: name },
  ...artists // Put old items at the end
]);
```
## removing from array
* The easiest way to remove an item from an array is to `filter` it out
```jsx
import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
```
* `artists.filter(a => a.id !== artist.id)` means “create an array that consists of those artists whose IDs are different from artist.id”.

## Transforming an array
* If you want to change some or all items of the array, you can use map() to create a new array. 
```jsx
import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
    </>
  );
}
```
* an array holds coordinates of two circles and a square. When you press the button, it moves only the circles down by 50 pixels. 


## replacing items in an array
* `arr[0] = 'bird'` are mutating the original array, so instead you’ll want to use `map()` for this as well.
```jsx
const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
```

## inserting into an array
* you may want to insert an item at a particular position that’s neither at the beginning nor at the end. To do this, you can use the `... array spread syntax together with the slice() method`.

```jsx
const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }
  ```

## sorting an array
* can’t do with the spread syntax and non-mutating methods like map() and filter()
* reverse() and sort() methods are mutating the original array, so you can’t use them directly.
* However, you can copy the array first, and then make changes to it. and then set it as a new state

```jsx
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List() {
const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    //even tho u made copy of the like.. try checking if reversing the copy effected the original or not
    console.log("OLD LIST : ", list);
    setList(nextList);
  }
```
* **even if you copy an array, you can’t mutate existing items inside of it directly.**
*  This is because copying is shallow
* if you modify an object inside the copied array, you are mutating the existing state.
```jsx
const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);
```
*

# Changing object in array




# misc things about state
* Avoid too many states
* Avoid duplicates
* When u r developing somthing
    * First, define How many states/changes ur UI should acc toseveral state changes
    * Ex: A form should be disabled when it is submitted.. submit button should be disabled when nothing is filled in the form.. and after submission ui should have some feedback
    * Sort all of them out and define the types of UI templates(without logic)
    * Now carefully lise the states
    * Combine the UI templates with Logic

## principles for structuring state
* **group related states** - if u always update 2/more states tigether make it single
* **avoid contradictions** - no 2 states should conflict each other (like isSending, isSent for a form)
* **avoid redundant state** - 2 states that have same memory houldn't be there
* **avoid deeply nested state** - make ur state as simple as u can




# IMP
## Do not mirror props in state
```jsx
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
```
* let's say messageCOlor is 'red' at start
* But in middle of development in parent component you changed the prop color.. But It won't be updated in color state
```jsx
import { useState } from 'react';

export default function Clock(props) {
  const [color, setColor] = useState(props.color);
  return (
    <h1 style={{ color: color }}>
      {props.time}
    </h1>
  );
}
//you can add below line to correct this
if(props.color !== color){
    setColor(props.color);
  }
```
* try changing color prop in the parent component
