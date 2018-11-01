import React from 'react';
import {connect} from 'react-redux';
import { addScore } from '../actions';
import '../App.css';

const AddScore = ({dispatch}) => {
    let input
    return (
        <div className="scoreinputs">
            <h1>Enter scores</h1>
            <form
            onSubmit={e => {
                e.preventDefault()
                dispatch(addScore(input.value))
                input.value = ''
            }}>
                <input type="number" required ref={node => input = node}/>

                <button id="button" type="submit">
                    add score
                </button>
            </form>
        </div>
    )
}

export default connect()(AddScore)