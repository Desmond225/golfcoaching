import React from 'react'
import PropTypes from 'prop-types'

const Score = ({ onClick, completed, text }) => {
    return (
        <div>
        <h2>Latest scores:</h2>
        <li
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through': 'none'}}
        >
            {text} ({text - 71}) 
        </li>
    </div>
    )
}

export default Score