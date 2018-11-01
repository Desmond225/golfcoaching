import {combineReducers} from 'redux';
import scores from './todos';
import visibilityFilter from './visibilityfilter';

export default combineReducers({
    scores,
    visibilityFilter
})