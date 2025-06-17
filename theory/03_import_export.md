# root component
* this is the top most component
* acc to vite, the root component is in index.html
* and then it is updated in main.jsx with App.jsx



## Export Import (named and default) import as, export as

THIS IS A STANDARD JS SYNTAX NOT REACT



https://javascript.info/import-export#export-before-declarations



* They have several syntax
### Export before declarations
```js
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}  // no ; at the end
```
* Please note that export before a class or a function does not make it a function expression. It’s still a function declaration, albeit exported.

### other than declarationd
```js
//say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // a list of exported variables
```
### Import
```js
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!


//import everythinggggg
// 📁 main.js
import * as say from './say.js';

say.sayHi('John'); //see say.--
say.sayBye('John');

```
* Explicitly listing what to import gives shorter names: sayHi() instead of say.sayHi().

# NOTE
* `Modern build tools, such as webpack and others, bundle modules together and optimize them to speedup loading. They also remove unused imports.`
* `For instance, if you import * as library from a huge code library, and then use only few methods, then unused ones will not be included into the optimized bundle.`


### import as
```js
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
```
### export as
```js
// 📁 say.js
...
export {sayHi as hi, sayBye as bye};

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!
```

### export default
* we have 2 types of modules
        * where a module that contain a lot of exports
        * only one to export (preferred)
* Modules provide a special export default (“the default export”) syntax to make the “one thing per module” way look better.

| Named export	| Default export |
| -------------------|------------|
| export class User {...}	| export default class User {...} |
| import {User} from ... |	import User from ... |
```js
// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}
```
# okay NOW IF i HAVE 2 exports But I put default to ONe Then ???

# export default shoul be used Only Once?? OR MORE??? in one module.

### Importing 'Default exported things'
```js
// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');
```
### ### Importing 'Default named things' (need braces)
```js
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```
* there CAN be both named and default exports in one file, But we dont do that .. only this or that
* At most one dafault export per file
* And export dafault might not have a name like below
* Not giving a name is fine, because there is only one export default per file, so import without curly braces knows what to import.
```js
export default function(user) { // no function name
  alert(`Hello, ${user}!`);
}

// Another file --- export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

* But **Without default, such an export would give an error:**
```js
export class { // Error! (non-default export needs a name)
  constructor() {}
}
```
* we can export default in below
```js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// same as if we added "export default" before the function
export {sayHi as default}; 
export default sayHi;  
```

### named and default mixed up
* Also see How exported things with no name are being imported here.
```js
// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');

// ORRRRR

// 📁 main.js
import * as user from './user.js';

let User = user.default; // the default export
new User('John');

```



## Importing with diff names in named and default cases
### named
```js
import {User} from './user.js';
// import {MyUser} won't work, the name must be {User}
```
### default
```js
import User from './user.js'; // works
import MyUser from './user.js'; // works too
// could be import Anything... and it'll still work
```

## Re-Export
* “Re-export” syntax *export ... from ...* allows to import things and immediately export them (possibly under another name), like this:
```js
export {sayHi} from './say.js'; // re-export sayHi

export {default as User} from './user.js'; // re-export default
```

* **What's the need?**
* Let say we are building a package with lots of modules (A, B, C).. 
* And inside tht, the modules help each other 
* and when we are giving it to someone but dont wanna show code
* We can just give a single file where we import and export req modules
```js
// 📁 auth/index.js

// import login/logout and immediately export them
import {login, logout} from './helpers.js';
export {login, logout};

// import default as User and export it
import User from './user.js';
export {User};
...


//shortcut
export {login, logout} from './helpers.js';

// re-export the default export as User
export {default as User} from './user.js';
```
* **RE-EXPORTED content is not available in the current file ANYMORE**

## re-exporting Default export
```js
// 📁 user.js
export default class User {
  // ...
}
.
.
.
export User from './user.js' //WONT WORK - SYNTAX ERROR!!!!!!!!!!!
// we have to write export {default as User}
export * from './user.js' // reexports only NAMED EXPORTS

//If we’d like to re-export both named and default exports, then two statements are needed:

export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export


```





# WHAT MAKES THE DIFFERENCE WHILE DEFAULT EXPORT AND NAMED EXPORT?? what changes ?
