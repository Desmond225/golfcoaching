import React from 'react';
import PropTypes from 'prop-types';
import Score from './score';
import { toggleScore } from '../actions';

const ScoreList = ({scores }) => (
    <ul>
        {scores.map(score => 
            <Score
            key={score.id}
            {...score}
            // onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
)

ScoreList.propTypes = {
    scores: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleScore: PropTypes.func.isRequired
  }

export default ScoreList