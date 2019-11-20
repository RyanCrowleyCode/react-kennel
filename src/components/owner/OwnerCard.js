import React, { Component } from 'react'


class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.props.owner.pictureName}`)} alt="owner" />
                    </picture>
                    <h4>{this.props.owner.name}</h4>
                    <p>
                        Phone: {this.props.owner.phone}
                    </p>
                    <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>
                        Remove
                    </button>
                </div>
            </div>
        )
    }
}

export default OwnerCard