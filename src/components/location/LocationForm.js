import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        locationStreet: "",
        locationCity: "",
        locationState: "",
        locationZip: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.locationName === "" || this.state.locationStreet === "" || this.state.locationCity === "" || this.state.locationState === "" || this.state.locationZip === "") {
            window.alert("Please input a location name, street address, city, state, and zipcode")
        } else {
            this.setState({ loadingStatus: true })
            const location = {
                name: this.state.locationName,
                street: this.state.locationStreet,
                city: this.state.locationCity,
                state: this.state.locationState,
                zip: this.state.locationZip,
            }

            ApiManager.post(location, "locations")
                .then(() => this.props.history.push("/locations"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationName"
                                placeholder="Location name"
                            />
                            <label htmlFor="locationStreet">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationStreet"
                                placeholder="Location street"
                            />
                            <label htmlFor="locationStreet">Street</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationCity"
                                placeholder="Location city"
                            />
                            <label htmlFor="locationCity">City</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationState"
                                placeholder="Location state"
                            />
                            <label htmlFor="locationState">State</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationZip"
                                placeholder="Location zip"
                            />
                            <label htmlFor="locationZip">Zip</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>

            </React.Fragment>
        )
    }

}

export default LocationForm