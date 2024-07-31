import React from 'react'

const Animal = React.memo(({ name, selectHandler }) => {

    console.log('Animal Comp Rendered');
    return (
        <>
            <div>Animal Name: {name}</div>
            <br />
            <button onClick={selectHandler}>Change Color</button>
        </>
    )
})

export default Animal