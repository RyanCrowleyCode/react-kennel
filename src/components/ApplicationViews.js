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
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'




class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <Home />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          if (this.isAuthenticated()) {
            return <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the AnimalDetailComponent
          if (this.isAuthenticated()) {
            return <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        <Route path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews