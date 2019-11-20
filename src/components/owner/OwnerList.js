import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import ApiManager from '../../modules/ApiManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    componentDidMount() {
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getAll("owners")
            .then((ownersArray) => {
                this.setState({
                    owners: ownersArray
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.owners.map(ownerObject =>
                    <OwnerCard key={ownerObject.id} owner={ownerObject} />
                )}
            </div>
        )
    }
}

export default OwnerList