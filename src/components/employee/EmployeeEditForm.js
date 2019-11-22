import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './EmployeeForm.css'

class EmployeeEditForm extends Component {
    // set the initial state
    state = {
        employeeName: "",
        employeeInfo: "",
        loadingStatus: true,
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true})
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,
            info: this.state.employeeInfo
        }

        ApiManager.update(editedEmployee, "employees")
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        ApiManager.get(this.props.match.params.employeeId, "employees")
        .then(employee => {
            this.setState({
                employeeName: employee.name,
                employeeInfo: employee.info,
                loadingStatus: false
            })
        })
    }

}

export default EmployeeEditForm
