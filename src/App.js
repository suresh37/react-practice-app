import logo from './logo.svg';
import './App.css';
import MyBtn from './components/MyBtn';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log('button clicked ::', count)
    setCount(count + 1);
  }
  function reset(){
    setCount(0);
  }
  return (
    <div className="App">
      <div style={{ "paddingTop": 100 }} >
        <p>{count}</p>
        <MyBtn count={count} onClick={handleClick}></MyBtn>
        <br></br>
        <MyBtn count={count} onClick={handleClick}></MyBtn>
        <br></br>
        <button onClick={reset}>Reset</button>
      </div>
    </div >
  );
}

export default App;
