let nextScoreId = 0;

export const addScore = text => ({
    type: 'ADD_SCORE',
    id: nextScoreId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleScore = id => ({
    type: 'TOGGLE_SCORE',
    id
})

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_UNDER_80: 'SHOW_UNDER_80',
    SHOW_OVER_80: 'SHOW_OVER_80'
}