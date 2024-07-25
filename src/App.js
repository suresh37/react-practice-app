import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyBtn from './components/MyBtn';
import Board from './components/Board';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log('button clicked ::', count)
    setCount(count + 1);
  }
  function reset() {
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
         <button onClick={reset}>Reset Count</button>
         <br></br>
         <p>Tic Tac Toe</p>
         <Board></Board>

       </div>
     </div >
   ); 
}

export default App;
