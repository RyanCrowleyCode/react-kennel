import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: []
    }

    componentDidMount() {
        //getAll from EmployeeManager and hang on to that data; put it in state
        EmployeeManager.getAll()
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