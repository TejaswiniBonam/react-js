//import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import PropsExample from './PropsExample.js';

function App() {
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload qwerty.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
  /* return ( 
    <>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </>
   ); */
   return (
    <>
    <PropsExample name="Teja" lastName="B" empid={12345}/>
    <PropsExample name="John" lastName="Doe" empid={67890}/>
    <PropsExample name="Jane" lastName="Smith" empid={54321}/>
    </>
   );

  
}

export default App;
