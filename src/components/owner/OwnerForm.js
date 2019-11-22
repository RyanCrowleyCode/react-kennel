import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        ownerPhone: "",
        loadingStatus: false
    }

    // every time there is a change, state is updated
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.ownerName === "" || this.state.ownerPhone === "") {
            window.alert("Please input an animal name and breed")
        } else {
            this.setState({ loadingStatus: true })
            const owner = {
                name: this.state.ownerName,
                phone: this.state.ownerPhone,
                pictureName: "defaultOwner.jpg"
            }

            ApiManager.post(owner, "owners")
                .then(() => this.props.history.push("/owners"))
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
                                id="ownerName"
                                placeholder="Owner name"
                            />
                            <label htmlFor="ownerName">Name</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="ownerPhone"
                                placeholder="Phone"
                            />
                            <label htmlFor="ownerPhone">Phone</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}

export default OwnerForm