# Updating Objects in state
* state can hold any JS value (objects, functions (funcitons are values too) etc)

* In case of objects, we can't update them just lik ethatt.. we need to make a new one and pass it

## mutation
* we know `numbers, strings, booleans` these are `Immutable` (means Once the things are created at a location the value can't be changed However the variable pointing to it can change it's direction to smwhere else)
* **mutation** - changing variable value
* **mutable things** - array, object, function, dates
* so `setNumber(5);` means changing number from smth to 5, but the number did not change itself, but state is replaced with 5. cuz numbers are Immutable
* But we know Objects are Immutable.. so it is possible to change object which is called `Mutation`
* BUT, In REact you should behave as if they are Immutable.. so **Instead of Mutating them, you should Always REPLACE them**

* Becuase **STATE SHOULD BE TREATED AS READ-ONLY**.. so is an object in state

```jsx
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        position.x = e.clientX;
        position.y = e.clientY;
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );

```
* Here, there is a red dot on the screen and when u move mouse, the dot should move along as well
* for that, we used mouse event.. and we `MUTATED` the object value with the mouse pointer coordinates
* we mutated MEANS `we did not use setState() to update the location`
* so react will not notice that the state has changed???
* SOO `TO TRIGGER A RE-RENDER CREATE A NEW OBJECT AND PASS IT USING setState()` 

```jsx
onPointerMove={e => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  });
}}
```
* This will work, as the setState() replaced the state and trigger re-render

## Local Mutation?
* in the first case, u mutated the existing state.., which was unnoticed by react
* But u can do local mutation too like.. the below code doesn't affect anything bad
```jsx
const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);
```
* Mutation isn't a problem as long as u dont touch existing state


## copying objects with spread syntax
* let say the object we have in a state has very big attributes soo creating everything again as a new object and setting state is kinda hard.. ESPECIALLY IF U WANNA CHANGE JUST ONE ATTRIBUTE
* Soo USE SPREAD
```jsx
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});
```
* `Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.`

## updating nested object
* below is the object and u need yo but city to delhi
```jsx
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```
* below is how to do it
```jsx
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
//ORRRR
setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```


## Using same event handler for multiple Fields (In Objects case ofc)
* Before
```jsx
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
```
* After
```jsx
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
```
* Instead of writing event Handlers for each like email, fistName, LastName.. we can use dynamic name using `[]` **check objects in js again**




# OKAY BUT ARE OBJECTS REALLY NESTED?
* NO wrong word.. See
```jsx
let obj = {
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
};
//YOU might say it is nested objects.. like artwork obj is in another obj
// BUT NO.. They are just two different Objects Like below
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};
//The obj1 object is not “inside” obj2. For example, obj3 could “point” at obj1 too:
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};

let obj3 = {
  name: 'Copycat',
  artwork: obj1
};
//If you were to mutate obj3.artwork.city, it would affect both obj2.artwork.city and obj1.city. This is because obj3.artwork, obj2.artwork, and obj1 are the same object. 
//This is difficult to see when you think of objects as “nested”. Instead, they are separate objects “pointing” at each other with properties.
//POINTING NOT NESTED
```


# Why is mutating state not recommended in React? 
