import React from 'react'

import Huts from './Huts'
import RegionSelect from './RegionSelect'
// import Region from './Region'

class App extends React.Component {

  render() {
    return (
      <div>
        <RegionSelect />
        <Huts />
      </div>
    );
  }
}

export default App