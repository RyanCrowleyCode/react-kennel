import React, { Component} from 'react'

class LocationCard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Address</h3>
                    <p className="address-paragraph">
                        <span className="street-address">500 Puppy Way</span>
                        <br /><span className="city">Nashville, </span><span className="state">TN </span><span className="zipcode">37027</span>
                    </p>

                </div>

            </div>
        )
    }
}

export default LocationCard