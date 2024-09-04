import React from 'react'
import UseStateComp from './UseStateComp';

const HooksComp = ({ show }) => {
    if (!show) {
        return '';
    }
    return (
        <>
            <h3>Hooks Comp</h3>
            <UseStateComp show={true} />
            <hr />
        </>
    )
}

export default HooksComp