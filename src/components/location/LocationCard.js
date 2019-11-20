import React, { Component } from 'react'

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

                </div>

            </div>
        )
    }
}

export default LocationCard