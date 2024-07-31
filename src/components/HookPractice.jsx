import React, { useCallback, useState } from 'react'
import Animal from './Animal';

const HookPractice = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Dog');
    const [color, setColor] = useState('White');

    const selectHandler = useCallback(() => {
        console.log('selectHandler');
        setName('Black');
    }, [color])

    return (
        <div>
            <p>counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>count++</button>
            <br />
            <br /><br />
            <hr />
            <Animal name={name} color={color} selectHandler={selectHandler} />
        </div>
    )
}

export default HookPractice