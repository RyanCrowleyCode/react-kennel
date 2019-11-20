import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import ApiManager from '../../modules/ApiManager'

class AnimalList extends Component {
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
            <div className="container-cards">
                {this.state.locations.map(locationObject =>
                    <LocationCard
                        key={locationObject.id}
                        location={locationObject}
                        deleteLocation={this.deleteLocation} />
                )}
            </div>
        )
    }
}

export default AnimalList