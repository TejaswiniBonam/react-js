# Immer Library
* If your state is deeply nested, you might want to consider flattening it. But, if you don’t want to change your state structure, you might prefer a shortcut to nested spreads.
* Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you.
```jsx
updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});
```
* It may look like MUTATING BUT But unlike a regular mutation, it doesn’t overwrite the past state!
* The draft provided by Immer is a special type of object, called a Proxy, that “records” what you do with it.
* Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.
```txt
npm install use-immer
Then replace import { useState } from 'react' with import { useImmer } from 'use-immer'
```
