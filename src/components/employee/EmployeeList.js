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

    deleteEmployee = id => {
        ApiManager.delete(id, "employees")
            .then(() => {
                ApiManager.getAll("employees")
                    .then((newEmployees) => {
                        this.setState({
                            employees: newEmployees
                        })
                    })
            })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button" className="btn" onClick={() => {this.props.history.push("/employees/new")}} >
                        New Employee
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.employees.map(employeeObject =>
                        <EmployeeCard
                            key={employeeObject.id}
                            employee={employeeObject}
                            deleteEmployee={this.deleteEmployee} 
                            {...this.props}/>

                    )}
                </div>
            </React.Fragment >
        )
    }
}

export default EmployeeList