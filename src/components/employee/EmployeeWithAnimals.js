import React, { Component } from 'react'
import ApiManager from '../../modules/ApiManager'
import AnimalCard from '../animal/AnimalCard'

class EmployeeWithAnimals extends Component {
    state = {
        employee: {},
        animals: [],
        loadingStatus: false
    }

    componentDidMount() {
        //got here now make call to get employee with animal
        ApiManager.getWithAnimals(this.props.match.params.employeeId)
            .then((APIResult) => {
                this.setState({
                    employee: APIResult,
                    animals: APIResult.animals,
                })
            })
    }

    deleteAnimal = id => {
        ApiManager.delete(id, "animals")
            .then(() => {
                return ApiManager.getWithAnimals(this.props.match.params.employeeId)
            })
            .then((APIResult) => {
                // if employee still has animals, reset state and show remaining animals
                if (APIResult.animals.length > 0) {
                    console.log(APIResult)
                    this.setState({
                        employee: APIResult,
                        animals: APIResult.animals,
                    })
                // if employee doesn't have any more animals, go back to employees page
                } else {
                    this.props.history.push("/employees")
                }

            })
        }

        render(){
            return (
                <div className="card">
                    <p>Employee: {this.state.employee.name}</p>
                    {this.state.animals.map(animal =>
                        <AnimalCard
                            key={animal.id}
                            animal={animal}
                            deleteAnimal={this.deleteAnimal}
                            {...this.props}
                        />
                    )}
                </div>
            )
        }
    }

    export default EmployeeWithAnimals;