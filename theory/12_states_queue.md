# state Queue
* When we have Multpile set State methods in our code, soo at that time.. react maintatins a schedule.. More like a queue that holds the set state methods in a queue
```jsx
//imagine number is 0
setNumber(number + 1);
        setNumber(number + 2);
        setNumber(number + 3);
```
* above, We are calling `setNumber(0+1), (0+2), (0+3)` soo the queue goes like `[(0+1), 0+2, 0+3]` BUT what we will get in the next render is `number=3`
# BATCHING
* grouping up the same setState methods into ONE RE-RENDER
* Like, In above we might assume there are 3 more rerenders But No They'll be batched up together in one re-render making the number = 3 as the latest state.
* This method avoids too many rerenders


# BUT You do not want to skip each line???
# then go for set Updater function
* set updater function is nothing but adding an arrow function inside setSate() instead of value
*  “do something with the state value”
```jsx
setNumber(n => n + 1)
```
* Here instead of n u can have anything and the n here represents latest value of the state.
* a function that calculates the next state based on the previous one in the queue, 

```jsx
const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
```
* now we have 3 set updaters in the queue.. and react will go through each of them cuz in `n=>n+1` n means the previous state and n+1 ia new one.

| **queued update** |	**number** |	**returns** |
|------------------|-----------------|--------------|
| n => n + 1 |	0 |	0 + 1 = 1 |
| n => n + 1 |	1 |	1 + 1 = 2 |
| n => n + 1 |	2 |	2 + 1 = 3 |

```jsx
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```
* in the above, if we assume number is 0, then in one click number will be = 6
* cuz, after the click we have 2 things in queue `(0+5), (number + 1)`
* Here number is the value of state after the calculation of requests before it in the queue
* after 1st, number becomes 5 and after 2nd it will be 6
* `setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its queue.`
* `setNumber(n => n + 1): n => n + 1 is an updater function. React adds that function to its queue.`
* `You may have noticed that setState(5) actually works like setState(n => 5), but n is unused!`

```jsx
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```
* after one click or many... number will be 42
* an updater function is dependent on the things before it (n=>n+1) cuz latest state is needed for it
* But.. normal setState(val) with some value doesn't depend on the things before it.. it just replaces the state with the valeu

