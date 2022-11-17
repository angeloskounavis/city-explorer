import React from 'react'

class LatLon extends React.Component{
  render() {
    return(
      <>
      <h2>
        Welcome to the {this.props.city}
      </h2>
      <p>
        {this.props.city}Is located at {this.props.lat} by {this.props.lon}
      </p>
      </>
    )
  }
}

export default LatLon;
