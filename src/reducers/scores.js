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
        return state

        default: 
        return state
    }
}

export default scores