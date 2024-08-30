import React from 'react'


const Button = ({ onClickCust }) => {
    // Passing Event Handlers as props, Event Propgataion
    // e.preventDefault() to avoid browser default behavior like form submit in button
    return (
        <>
            <button onClick={(e) => {
                e.stopPropagation();
                onClickCust(e);
            }}>Click</button>
        </>
    )
}

const Interactivity = ({ show }) => {

    const onClickCustHandler = (e) => {
        console.log('Button Clicked :: Cust Event Handler', e);
    }
    const divClickHandler = () => {
        console.log('Div Clicked');
    }


    return (!show) ? '' :
        (
            <>
                <h3>Interactivity</h3>
                <div onClick={divClickHandler}>
                    Button Div
                    <Button onClickCust={onClickCustHandler} />
                </div>
                <hr />
            </>
        )
}

export default Interactivity