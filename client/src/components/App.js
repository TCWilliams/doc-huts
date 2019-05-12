import React from 'react'
import { connect } from 'react-redux'

import Spinner from './Spinner'

import { loadHuts } from '../actions'


class App extends React.Component {

  componentDidMount() {
    this.props.loadHuts()
  }

  render() {
    return (
      <div>
        App
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    huts: state.huts,
  }
}
export default connect(
  mapStateToProps,
  {
    loadHuts,
  }
)(App)