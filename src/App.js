import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MyBtn from './components/MyBtn';
import Board from './components/Board';
import './styles.css';
import Gallery from './components/Gallery';
import Weather from './components/Weather';
import HookPractice from './components/HookPractice';
import PureComp from './components/PureComp';

function BtnCounter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log('button clicked ::', count)
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
  return (<div><p>{count}</p>
    <MyBtn count={count} onClick={handleClick}></MyBtn>
    <MyBtn count={count} onClick={handleClick}></MyBtn>
    <button onClick={reset}>Reset Count</button>
  </div>);
}

function App() {


  return (
    <div>
      {/* <Weather /> */}
      <HookPractice />
      <PureComp/>

    </div>
    /*  <div>
       <Gallery />
     </div> */

    /* <div className="App">
        <div style={{}} >
          <BtnCounter />
          <Board />
        </div>
      </div > */
  );
}

export default App;
