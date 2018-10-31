import React from 'react';
import '../App.css';

const AddScores = () => {
    let score
    return (
        <div class="scoreSubmitSection">
        <h1>ADD SCORES</h1>
        <form>
            <input ref={node => score = node} />
            <button type="submit">
                submit score
            </button>
        </form>
        </div>
    )

}

export default AddScores