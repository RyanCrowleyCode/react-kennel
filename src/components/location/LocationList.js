import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    componentDidMount() {
        //getAll from LocationManager and hang on to that data; put it in state
        LocationManager.getAll()
            .then((locationsArray) => {
                this.setState({
                    locations: locationsArray
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.locations.map(locationObject =>
                    <LocationCard key={locationObject.id} location={locationObject} />
                )}
            </div>
        )
    }
}

export default AnimalList