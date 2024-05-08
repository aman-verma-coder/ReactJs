import './App.css';

//62.6 Our first component
function Title () {
  return <h1>Hello World!</h1>;
}

function Description () {
  return <p>This is a simple React app.</p>;
}

function App () {
  return (
    <div>
      <Title />
      <Description />
      <Description />
      <button>Click Me!</button>
    </div>
  );
}

export default App;
