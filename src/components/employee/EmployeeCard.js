import React, { Component } from 'react'

class EmployeeCard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Employee</h3>
                    <picture>
                        <img src={require('./david-dogperson.jpg')} />
                    </picture>
                    <h4>David Dogperson</h4>
                    <p>We are happy to have David on our team! David moved to Nashville in 2017 from North Carolina, where he helped to raise his family's 9 dogs.</p>
                </div>
            </div>
        )
    }
}

export default EmployeeCard