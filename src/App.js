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

function BtnCounter() {
	const [count, setCount] = useState(0);
	function handleClick() {
		console.log('button clicked ::', count);
		setCount(count + 1);
	}
	function reset() {
		setCount(0);
	}
	return (
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
	);
}

function App() {
	return (
		<div>
			{/* <Weather /> */}
			<HookPractice />
			<PureComp />

			<FancyText
				title
				text='Inspiration App'
			/>
			<InspirationQuotes>
				<Copyright year={2024} />
			</InspirationQuotes>
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
