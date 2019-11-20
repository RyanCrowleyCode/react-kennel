import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
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