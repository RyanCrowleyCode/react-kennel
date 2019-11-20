import React, { Component } from 'react'
import { Link } from "react-router-dom"

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>{this.props.location.name}</h3>
                    <p className="address-paragraph">
                        <span className="street-address">{this.props.location.street}</span>
                        <br /><span className="city">{this.props.location.city}, </span><span className="state">{this.props.location.state} </span><span className="zipcode">{this.props.location.zip}</span>
                    </p>
                    <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                    <button type="button" onClick={() =>
                        this.props.deleteLocation(this.props.location.id)}>
                        Close
                    </button>

                </div>

            </div>
        )
    }
}

export default LocationCard