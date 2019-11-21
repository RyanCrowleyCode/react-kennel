import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      loadingStatus: true
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
        zip: location.zip,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    ApiManager.delete(this.props.locationId, "locations")
    // the push will put the /locations url on top of the history stack, so the url will change to /locations
    .then(() => this.props.history.push("/locations"))
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
                <button type="button" disabled={this.state.loadingStatus} onClick=  {this.handleDelete}>
                        Close
                    </button>
            </p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;