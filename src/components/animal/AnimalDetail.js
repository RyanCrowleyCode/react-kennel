import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './AnimalDetail.css'
import firstLetterCase from '../../modules/helpers'

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        loadingStatus: true
    }


    componentDidMount() {
        //get(id) from ApiManager and hang on to the data; put it into state
        ApiManager.get(this.props.animalId, "animals")
            .then((animal) => {
                this.setState({
                    name: firstLetterCase(animal.name),
                    breed: animal.breed,
                    loadingStatus: false
                })
            })
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        ApiManager.delete(this.props.animalId, "animals")
            // the push will put the /animals url on top of the history stack, so the url will change to /animals
            .then(() => this.props.history.push("/animals"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dog.svg')} alt="My Dog" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Breed: {this.state.breed}</p>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/animals/${this.props.animalId}/edit`) }}>Edit</button>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>
                        Discharge
                    </button>
                </div>
            </div>
        )
    }
}

export default AnimalDetail;