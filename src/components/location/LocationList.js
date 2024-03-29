import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import ApiManager from '../../modules/ApiManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    componentDidMount() {
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getAll("locations")
            .then((locationsArray) => {
                this.setState({
                    locations: locationsArray
                })
            })
    }

    deleteLocation = id => {
        ApiManager.delete(id, "locations")
            .then(() => {
                ApiManager.getAll("locations")
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-content">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => {this.props.history.push("/locations/new")}}>
                            Add Location
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(locationObject =>
                        <LocationCard
                            key={locationObject.id}
                            location={locationObject}
                            deleteLocation={this.deleteLocation} />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default LocationList