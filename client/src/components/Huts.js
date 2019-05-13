import React from 'react'
import { connect } from 'react-redux'

import { loadAllHuts } from '../actions'
import { setRegions } from '../actions'
import { setHutsToRegions } from '../actions'
import { selectHut } from '../actions'


class Huts extends React.Component {

  componentDidMount() {
    this.props.loadAllHuts()
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.huts) {
      this.parseHutData(this.props.huts)
    }
  }

  parseHutData(data) {
    const regions = {}
    data.forEach(element => {
      if (!regions[element.region]) {
        regions[element.region] = []
      }
      regions[element.region].push(element)
    })
    this.props.setRegions(Object.keys(regions))
    this.props.setHutsToRegions(regions)
  }

  selectHutHandler = hut => {
    console.log(hut)
    this.props.selectHut(hut.assetId)
  }

  buildHutDisplay() {
    const huts = this.props.hutsToRegions[this.props.selectedRegion]
    return huts.map(e => {
      return (
        <div key={e.assetId}
          onClick={() => this.selectHutHandler(e)}>
          <span>
            {e.name}
          </span>
        </div>
      )
    })

  }

  render() {
    if (this.props.selectedRegion) {
      return this.buildHutDisplay()
    }
    return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    huts: state.huts,
    selectedRegion: state.selectedRegion,
    hutsToRegions: state.hutsToRegions,
    selectedHut: state.selectedHut,
  }
}
export default connect(
  mapStateToProps,
  {
    loadAllHuts,
    setRegions,
    setHutsToRegions,
    selectHut,
  }
)(Huts)