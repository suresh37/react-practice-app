import React from 'react'

const Animal = React.memo(({ name, color, nameHandler, colorHandler }) => {

    console.log('Animal Comp Rendered');
    return (
        <>
            <div>Animal Name: {name} | Color: {color}</div>
            <br />
            <button onClick={nameHandler}>Change Name</button>
            <br />
            <button onClick={colorHandler}>Change Color</button>
        </>
    )
})

export default Animal