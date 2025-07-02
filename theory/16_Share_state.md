# sharing state among components
* Sometimes, you want the state of two components to always change together. 
* To do it, remove state from both of them, move it to their closest common parent, 
* and then pass it down to them via props. 
* and this process is called `Lifting state up`
* Example: In TicTacToe.. u have 9 statesfor each boxes and u had to use all 9 states in calculating winner.. so u lifted state to parent Board.

* **If there are some component siblings.. they have their OWN states.. (independent of each other)**

```jsx
import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
```
* Here u used 2 `<Panel />` and the show buttons are functioning independently of each other.
* **BUT IF U WANNA CHANGE IN A WAY THAT.. ONLY ONE PANEL CAN BE SHOWN AT A TIME**
* that means, u need a communication among th component's states.. like only one of the component's state should be changed..
* remove the state from panel, create the state array OR more efficient way (storing active index only) in the next parent and pass down with event handlers
```jsx
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
```

# controlled and uncontrolled components
## uncontrolled
* In te first example.. `<Panel />` has it's state (isActive) in his own.
*  because its parent cannot influence whether the panel is active or not.
* Uncontrolled components are easier to use within their parents because they require less configuration.
* they’re less flexible when you want to coordinate them together.


## controlled
* you might say a component is “controlled” when the important information in it is driven by props rather than its own local state. 
* In second example.. The final Panel component with the isActive prop is controlled by the Accordion component.
*  maximally flexible, but they require the parent components to fully configure them with props.
-----
*  “controlled” and “uncontrolled” aren’t strict technical terms—
* component may usually has some mix of both local state and props. 
* When writing a component, consider which information in it should be controlled (via props), and which information should be uncontrolled (via state).


# single source of truth principle
* For each unique piece of state, you will choose the component that “owns” it. 
