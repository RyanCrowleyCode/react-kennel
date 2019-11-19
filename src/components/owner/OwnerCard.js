import React, { Component } from 'react'

class OwnerCard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./pamela-puppyperson.jpg')} alt="Pamela Puppyperson and her dog." />
                    </picture>
                    <h4>Pamela Puppyperson</h4>
                    <p>Pamela is a Nashville Native. Her passion for helping dogs is matched only by her passion for helping people.</p>
                    <p>
                    </p>
                </div>
            </div>
        )
    }
}

export default OwnerCard