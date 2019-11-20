import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import ApiManager from '../../modules/ApiManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

    componentDidMount() {
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getAll("animals")
            .then((animalsArray) => {
                this.setState({
                    animals: animalsArray
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.animals.map(animalObject =>
                    <AnimalCard key={animalObject.id} animal={animalObject} />
                )}
            </div>
        )
    }
}

export default AnimalList