import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        name: "",
        info: "",
        pictureName: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /* Local method for validation, set loadingStatus, create employee
    object, invoke ApiManager post method, and redirect to the full employee list */
    constructNewEmployee = evt => {
        evt.preventDefault()
        if (this.state.employeeName === "" || this.state.employeeInfo === "") {
            window.alert("Please input an employee name and info")
        } else {
            this.setState({ loadingStatus: true })
            const employee = {
                name: this.state.employeeName,
                info: this.state.employeeInfo,
                pictureName: "defaultEmployee.jpg"
            }

            // Create employee and redirect user to employee list
            ApiManager.post(employee, "employees")
                .then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                placeholder="Employee name"
                            />
                            <label htmlFor="employeeName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="employeeInfo"
                                placeholder="Employee info"
                            />
                            <label htmlFor="employeeInfo">Info</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }
}

export default EmployeeForm