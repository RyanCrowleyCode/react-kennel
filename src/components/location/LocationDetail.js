import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: ""
  }

  componentDidMount(){
    //get(id) from ApiManager and hang on to the data; put it into state
    ApiManager.get(this.props.locationId, "locations")
    .then((location) => {
      this.setState({
        name: location.name,
        street: location.street,
        city: location.city,
        state: location.state,
        zip: location.zip
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>
                Street: {this.state.street}
                <br></br>City: {this.state.city}
                <br></br>State: {this.state.state}
                <br></br>Zip: {this.state.zip}
            </p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;