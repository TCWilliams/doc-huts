import React from 'react'
import { connect } from 'react-redux'

import '../styles/app.css'


class selectedHut extends React.Component {

  getHutFacilities(facilities) {
    return facilities.map(e => e).join(', ')
  }

  render() {
    if (this.props.selectedHut) {
      const hut = this.props.selectedHut
      return (
        <div className="container selected-hut-container">
          <img src={hut.introductionThumbnail}
               alt="Not available"></img>
          <h4>{hut.name}</h4>
          <br />
          <p>{hut.introduction}</p>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Location</td>
                <td>{hut.locationString}</td>
              </tr>
              <tr>
                <td>Facilities</td>
                <td>{this.getHutFacilities(hut.facilities)}</td>
              </tr>
              <tr>
                <td>Number of bunks</td>
                <td>{hut.numberOfBunks}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{hut.hutCategory}</td>
              </tr>
              <tr>
                <td>Bookable</td>
                <td>{hut.bookable ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{hut.status}</td>
              </tr>
              <tr>
                <td colSpan="2">
                
                    Open www.doc.govt.nz map in new tab
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    return <div></div>
  }

}

const mapStateToProps = (state) => {
  return {
    selectedHut: state.selectedHut,
  }
}
export default connect(
  mapStateToProps,
  {}
)(selectedHut)