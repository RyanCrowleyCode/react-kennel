import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './EmployeeDetail.css'

class EmployeeDetail extends Component {
    state = {
        name: "",
        info: "",
        pictureName: 'defaultEmployee.jpg',
        loadingStatus: true
    }

    componentDidMount() {
        ApiManager.get(this.props.employeeId, "employees")
            .then((employee) => {
                this.setState({
                    name: employee.name,
                    info: employee.info,
                    pictureName: employee.pictureName,
                    loadingStatus: false
                })
            })
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        ApiManager.delete(this.props.employeeId, "employees")
            // the push will put the /employees url on top of the history stack, so the url will change to /employees
            .then(() => this.props.history.push("/employees"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.state.pictureName}`)} alt="Employee" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>{this.state.info} </p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>
                        Fire
                    </button>
                    
                </div>
            </div>
        )
    }


}

export default EmployeeDetail