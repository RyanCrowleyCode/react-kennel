import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import ApiManager from '../../modules/ApiManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: []
    }

    componentDidMount() {
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getAll("employees")
            .then((employeesArray) => {
                this.setState({
                    employees: employeesArray
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.employees.map(employeeObject => 
                    <EmployeeCard key={employeeObject.id} employee={employeeObject} />

                )}
            </div>
        )
    }
}

export default EmployeeList