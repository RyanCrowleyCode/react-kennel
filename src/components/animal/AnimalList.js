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

    deleteAnimal = id => {
        ApiManager.delete(id, "animals")
            .then(() => {
                ApiManager.getAll("animals")
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    render() {
        return (
            <React.Fragment>
                {/* add this button above your display of animal cards*/}
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/animals/new") }}>
                        Admit Animal
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.animals.map(animalObject =>
                        <AnimalCard
                            key={animalObject.id}
                            animal={animalObject}
                            deleteAnimal={this.deleteAnimal} 
                            {...this.props}/>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default AnimalList