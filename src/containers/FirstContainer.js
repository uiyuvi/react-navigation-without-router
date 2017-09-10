import FirstComponent from '../components/First';
import { connect } from 'react-redux';
import {CHANGE_VIEW_MANAGER_CURRENT} from './../actions/changeViewManager';
const mapStateToProps = (state, ownProps) => {
    return {
      message: state.viewManager.current
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'Second' })
      }
    }
  }
  const FirstComponentRender = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FirstComponent);

  export default FirstComponentRender;