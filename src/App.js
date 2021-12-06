import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from './components/AddEmployee.js';
import EmployeeList from "./components/EmployeeList";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import navHeader from "./components/navHeader";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Employment Management System</a>
        </nav>
        
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route path="/add" element={<AddEmployee />} />
              <Route path="/view/:id" element={<ViewEmployee />} />
              <Route path="/update/:id" element={<UpdateEmployee />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}