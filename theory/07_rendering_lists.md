# render LISTS
* You will often want to display multiple similar components from a collection of data
*  You can use the JavaScript array methods to manipulate an `array of data`. On this page, you’ll use `filter()` and `map()` with React to filter and transform your array of data into an array of components.

```jsx
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```
# steps for map()
```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
const listItems = people.map(person => <li>{person}</li>);
return <ul>{listItems}</ul>;
```
* This is a short cut for this
* **BUT IT GIVES AN `ERROR`**
* `Each child in a list should have a unique "key" prop.`

# filter()
```jsx
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const chemists = people.filter(person =>
  person.profession === 'chemist'
);

const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);
return <ul>{listItems}</ul>;
```
* AGAIN SAME `ERROR`
* `Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:`
```jsx
const listItems = chemists.map(person =>
  <li>...</li> // Implicit return!
);
```
`However, you must write return explicitly if your => is followed by a { curly brace!`
```jsx
const listItems = chemists.map(person => { // Curly brace
  return <li>...</li>;
});
```

# Each <li> should have unique key (resolving ERROR)
* You need to give each array item a key — a string or a number that uniquely 
* JSX elements directly inside a map() call always need keys!
* for DOM structure management purposes 
* **JSX elements directly inside a map() call always need keys! Not the normal list items which are directly written and returned**
* if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the `DOM tree.`


# what if we need to render multiple DOM nodes for each item??
```jsx
//we have a list of names 
const names = ['a', 'b', 'c', 'd']
const ages = [1, 2, 3 , 4]
// make it an object peeople = {name, age}
// Now I need to render <h1> name </h1> <p> age </p> for ALL
const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```
* You can use div too  But It's layout changes and disturbs CSS, Soo full form of `<>` which is `<Fragment>` is better

# where to get keys?
* if it is database, get the IDs
* locally generated data? use counter? or others

# rules of keys
* must be unique among siblings.. Okay to use same keys from DIFF arrays
* Must not change or it defeats their purpose


# why keys
* Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.


* **You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the order in which you render items will change over time if an item is `inserted, deleted`, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.**
* **Also dont do `{Math.random()}` cuz, It may be during re-renders**

`Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.`
* `<Profile key={id} userId={id} />.` Here, key={id} is a hint for react to consume it.. Like it is not a general prop anymore.. If u want to pass it to ur component pass it again with some other name like `userId`





# you may think
* Like, even if you give array index for each as keys.. You might think even if they gets jumbled or manipulated.. you might think that the key sticks with them BUT NO
```jsx
const items = ['Apple', 'Banana', 'Orange'];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

// so initial render will be
<ul>
  <li key="0">Apple</li>
  <li key="1">Banana</li>
  <li key="2">Orange</li>
</ul>
//ANd YOU deleted APPLE and react RE RENDERS Now
<ul>
  <li key="0">Banana</li>  {/* Previously: Apple */}
  <li key="1">Orange</li>  {/* Previously: Banana */}
</ul>
// OOPS IT CHANGED SO USE IT LIKE BELOW
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
// EVEN IF APPLE GETS DELETED, apple id also gets deleted
```













