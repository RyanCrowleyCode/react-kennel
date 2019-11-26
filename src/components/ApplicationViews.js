import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import EmployeeList from './employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationForm from './location/LocationForm'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'




class ApplicationViews extends Component {


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          if (this.props.user) {
            return <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          if (this.props.user) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm
              animalId={parseInt(props.match.params.animalId)}
              {...props} />
          }}
        />
        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          if (this.props.user) {
            return <LocationForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the AnimalDetailComponent
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
          if (this.props.user) {
            return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          if (this.props.user) {
            return <EmployeeWithAnimals {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          if (this.props.user) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route exact path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          if (this.props.user) {
            return <OwnerForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews