import {connect} from 'react-redux';
import {toggleScore} from '../actions';
import ScoreList from '../components/scorelist'
import {VisibilityFilter} from '../actions';

const getVisibleScores = (scores, filter) => {
    switch(filter) {
        case VisibilityFilter.SHOW_ALL:
        return scores
        case VisibilityFilter.SHOW_UNDER_80:
        return scores.filter(t => t.under80)
        case VisibilityFilter.SHOW_OVER_80:
        return scores.filter(t => !t.over80)
        default:
        console.log('oops')

    }
}

const mapStateToProps = state => ({
    scores:getVisibleScores(state.scores, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleScore: id => dispatch(toggleScore(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList)