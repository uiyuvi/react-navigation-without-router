
import { connect } from 'react-redux';
import {CHANGE_VIEW_MANAGER_CURRENT} from './../actions/changeViewManager';
import ThirdComponent from '../components/Third'
const mapStateToProps = (state, ownProps) => {
    return {
      message: state.viewManager.current
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onHomeClick: () => {
        dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'First' })
      }
    }
  }
  let ThirdComponentRender = connect(
    mapStateToProps,
    mapDispatchToProps)(ThirdComponent)

export default ThirdComponentRender;