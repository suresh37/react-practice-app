import React, { useCallback, useState } from 'react'
import Animal from './Animal';

const HookPractice = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Dog');
    const [color, setColor] = useState('White');

    const nameHandler = () => {
        console.log('nameHandler');
        setName(name == 'Dog' ? 'Cat' : 'Dog');
    }

    const colorHandler = useCallback(() => {
        console.log('colorHandler');
        setColor(color == 'White' ? 'Black' : 'White');
    }, [color])

    return (
        <div>
            <p>counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>count++</button>
            <br />
            <br /><br />
            <hr />
            <Animal name={name} color={color} nameHandler={nameHandler} colorHandler={colorHandler} />
        </div>
    )
}

export default HookPractice