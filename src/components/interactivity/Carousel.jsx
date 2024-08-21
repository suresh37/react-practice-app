import React, { useState } from 'react'
import { sculptureList } from './sculptures';

const Carousel = ({ show }) => {

  const [index, setIndex] = useState(0);
  const [more, setMore] = useState(false);

  function handleNextClick() {
    console.log('Next Clicked ', 'Index', index);
    setIndex(index + 1 < sculptureList.length ? index + 1 : 0);
    console.log('Index', index)
  }
  function handleMoreClick() {
    console.log('More Clicked ' + more);
    setMore(!more);
  }

  let sculpture = sculptureList[index];
  return !show ? '' : (
    <div>
      <h3>Carousel</h3>
      <button onClick={() => handleNextClick()}>Next</button>
      <p>name: {sculpture.name}</p>
      <p>artist: {sculpture.artist}</p>
      <button onClick={() => handleMoreClick()}>Show {!more ? 'More' : 'Less'}</button>
      <p> {more ? 'Desc: ' + sculpture.description : ''}</p>
      <br />
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  )
}

export default Carousel