import React from 'react'
import FilterLink from '../containers/filterlink'
import {VisibilityFilter} from '../actions'

const Footer = () => (
    <div>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>
        All
        </FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
        Scores over 80
        </FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
        Scores under 80
        </FilterLink>
    </div>
)

export default Footer