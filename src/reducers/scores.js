const scores = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SCORE':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        case 'TOGGLE_SCORE':
        return state.map(score => (score.id === action.id)
        ? {...score, completed: !score.completed} : score)
        default: 
        return state
    }
}

export default scores