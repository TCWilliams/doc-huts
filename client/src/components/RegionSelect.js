import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';

import { selectRegion } from '../actions'

class RegionSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: []
    }
  }

  handleSelectedRegionChange = ({ value }) => {
    this.props.selectRegion(value)
  }

  componentDidUpdate(prevProps) {
    
    if (!prevProps.regions && this.props.regions) {
      const options = []
      for (const item of this.props.regions.sort()) {
        item !== 'null' && options.push({
          value: item,
          label: item.toUpperCase()
        })
      }
      console.log('made options', options)  
      this.setState({ selectOptions: options })
    }
  }

  render() {
    if (this.state.selectOptions.length) {
      return (
        <div>
          <Select
            value={this.props.selectedRegion}
            onChange={this.handleSelectedRegionChange}
            options={this.state.selectOptions}
          />
          Regions
        </div>
      );
    }
    return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    huts: state.huts,
    regions: state.regions,
    selectedRegion: state.selectedRegion,
    hutsToRegions: state.hutsToRegions,
  }
}
export default connect(
  mapStateToProps,
  {
    selectRegion,
  }
)(RegionSelect)