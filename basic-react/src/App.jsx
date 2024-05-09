import './App.css';
import Title from './Title.jsx'; //Import-Export
import {Intro1, Intro2} from './Intro.jsx'; //Import-Export
import Sum from './JSXwithCurlyBraces.jsx';

//62.6 Our first component

function Description () {
  return <p>This is a simple React app.</p>;
}

function App () {
  return (
    <>
      <Title />
      <Description />
      <Description />
      <Intro1 />
      <Intro2 />
      <Sum/>
      <button>Click Me!</button>
      </>
  );
}

export default App;
