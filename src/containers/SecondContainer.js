import { connect } from 'react-redux';
import {CHANGE_VIEW_MANAGER_CURRENT} from './../actions/changeViewManager';
import SecondComponent from '../components/Second'

const mapStateToProps = (state, ownProps) => {
    return {
      message: state.viewManager.current
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onPrevClick: () => {
        dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'First' })
      },
      onNextClick: () => {
        dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'Third' })
      }
    }
  }
  let SecondComponentRender = connect(
    mapStateToProps,
    mapDispatchToProps)(SecondComponent)

    export default SecondComponentRender;