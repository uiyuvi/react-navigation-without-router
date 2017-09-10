

import ViewManagerApp from '../components/ViewManagerApp'

import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
return {
    localState: state.viewManager.current
}
}
  
const ViewManagerContainer = connect(
    mapStateToProps
)(ViewManagerApp)
  
export default ViewManagerContainer;