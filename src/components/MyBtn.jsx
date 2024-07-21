import React from 'react'

const MyBtn = ({ count, onClick }) => {
    return (
        <button onClick={onClick} > Click ({count}) </button >
    )
}

export default MyBtn