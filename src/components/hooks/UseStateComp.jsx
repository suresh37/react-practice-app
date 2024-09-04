import React, { useState } from 'react'

const UseStateComp = ({ show }) => {
    const [num, setNum] = useState(0);

    if (!show) {
        return '';
    }

    function handleBtnClick() {
        setNum(curr => curr + 1);
    }

    return (
        <div>
            <h4>Use State</h4>
            Num : {num}
            <br />
            <button onClick={handleBtnClick}>Num++</button>
        </div>
    )
}

export default UseStateComp