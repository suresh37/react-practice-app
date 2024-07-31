import React from 'react'

const Animal = React.memo(({ name, color, selectHandler }) => {

    console.log('Animal Comp Rendered');
    return (
        <>
            <div>Animal Name: {name} | Color: {color}</div>
            <br />
            <button onClick={selectHandler}>Change Color</button>
        </>
    )
})

export default Animal