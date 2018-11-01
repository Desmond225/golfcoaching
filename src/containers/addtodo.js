import React from 'react';
import {connect} from 'react-redux';
import { addScore } from '../actions';

const AddScore = ({dispatch}) => {
    let input
    return (
        <div>
            <form
            onSubmit={e => {
                e.preventDefault()
                dispatch(addScore(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node}/>

                <button type="submit">
                    add score
                </button>
            </form>
        </div>
    )
}

export default connect()(AddScore)