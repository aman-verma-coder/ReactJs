import './App.css';
// import Title from './Title.jsx'; //Import-Export
// import {Intro1, Intro2} from './Intro.jsx'; //Import-Export
// import Sum from './JSXwithCurlyBraces.jsx';
import ProductCombined from './ProductCombined.jsx';
import Msgbox from './Msgbox.jsx';

//62.6 Our first component

// function Description () {
//   return <p>This is a simple React app.</p>;
// }

function App () {
  return (
    <>
      {/* <Title />
      <Description />
      <Description />
      <Intro1 />
      <Intro2 />
      <Sum/>
      <button>Click Me!</button>  */}
      <ProductCombined />
      <Msgbox username={'Aman'} textcolor={'green'}/>
      </>
  );
}

export default App;
