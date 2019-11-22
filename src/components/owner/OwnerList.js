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

    deleteOwner = id => {
        ApiManager.delete(id, "owners")
            .then(() => {
                ApiManager.getAll("owners")
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button" className="btn"
                        onClick={() => { this.props.history.push("/owners/new") }}>
                        New Owner
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.owners.map(ownerObject =>
                        <OwnerCard
                            key={ownerObject.id}
                            owner={ownerObject}
                            deleteOwner={this.deleteOwner} />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default OwnerList