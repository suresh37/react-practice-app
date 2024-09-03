import React from 'react'

const ManageState = ({ show }) => {
    return (!show) ? '' : (
        <>
            <h3>Managing State</h3>
            <hr />
        </>
    )
}

export default ManageState