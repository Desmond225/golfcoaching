import {combineReducers} from 'redux';
import scores from './scores';
import visibilityFilter from './visibilityfilter';

export default combineReducers({
    scores,
    visibilityFilter
})