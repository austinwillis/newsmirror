import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import App from './App.jsx'

function mapStateToProps(state) {
  return {
    stories: state.stories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main
