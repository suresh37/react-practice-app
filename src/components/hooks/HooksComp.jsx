import React from 'react'

const HooksComp = ({ show }) => {
    if (!show) {
        return '';
    }
    return (
        <>
            <h3>Hooks Comp</h3>
            <hr />
        </>
    )
}

export default HooksComp