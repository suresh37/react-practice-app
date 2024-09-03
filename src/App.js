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
import InspirationQuotes from './components/inspirational-app/InspirationQuotes';
import Copyright from './components/inspirational-app/Copyright';
import FancyText from './components/inspirational-app/FancyText';
import Carousel from './components/interactivity/Carousel';
import Interactivity from './components/interactivity/Interactivity';
import ManageState from './components/interactivity/ManageState';

function BtnCounter({ show }) {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log('button clicked ::', count);
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
  return show ?
    <div>
      <p>{count}</p>
      <MyBtn
        count={count}
        onClick={handleClick}
      ></MyBtn>
      <MyBtn
        count={count}
        onClick={handleClick}
      ></MyBtn>
      <button onClick={reset}>Reset Count</button>
    </div>
    : '';
}

function App() {
  return (
    <>
      {/* <div className='App'>
		    <div style={{}}> */}
      {/*----------------------------------------*/}

      {/* From Tutorial */}
      <BtnCounter show={false} />
      <Gallery show={false} />
      <Board show={false} />

      {/* API Calls Integration */}
      {/*  <Weather show={false} /> */}

      {/* Usecallback, UseEffect */}
      <HookPractice show={false} />

      {/* Iterating List */}
      <PureComp show={false} />
      {/* UI Render Tree */}
      <InspirationQuotes show={false}>
        <Copyright year={2024} />
      </InspirationQuotes>

      <Carousel show={false} />

      <Interactivity show={false} />

      <ManageState show={true} />

      {/*----------------------------------------*/}
      {/* </div>
			</div> */}
    </>
  );
}

export default App;
