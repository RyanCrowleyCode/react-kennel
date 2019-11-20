import React, { Component } from 'react'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.props.employee.pictureName}`)} alt="employee" />
                    </picture>
                    <h4>{this.props.employee.name}</h4>
                    <p>{this.props.employee.info}</p>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>
                        Fire
                    </button>
                </div>
            </div>
        )
    }
}

export default EmployeeCard