import React from 'react'
import PropTypes from 'prop-types'

const Score = ({ text }) => {
    return (
        <div>
        <h2>Latest scores:</h2>
        <li>
            {text} ({text - 71}) 
        </li>
    </div>
    )
}

export default Score