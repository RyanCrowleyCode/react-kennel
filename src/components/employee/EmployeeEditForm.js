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
        this.setState({ loadingStatus: true })
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

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                value={this.state.employeeName}
                            />
                            <label htmlFor="employeeName">
                                Employee name
                            </label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="employeeInfo"
                                value={this.state.employeeInfo}
                            />
                            <label htmlFor="employeeInfo">
                                Employee info
                            </label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEmployee}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }

}

export default EmployeeEditForm
