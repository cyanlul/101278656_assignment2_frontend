import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function EmployeeList() {

    const [employees, setEmployees] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/v1/employees')
            .then(res => {
                setEmployees(res.data)
            }).catch(error => console.log(error))
    }, [])


    const addEmployee = () => {
        navigate("/add")
    }

    const updateEmployee = (id) => {
        navigate(`/update/${id}`)
    }

    const deleteEmployeeByID = (id) => {
        axios.delete(`api/v1/employees/${id}`)
            .then(window.location
                .reload(false), alert('Employee Removed'))
    }

    const viewEmployee = (id) => {
        navigate(`/view/${id}`)
    }

    return (
        <div>
            <h1>Employee List</h1>

            <hr />
            
            <Button onClick={addEmployee}>Add Employee</Button>
            <br/>
            <br/>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <div class="btn-group">
                                    <Button class="btn btn-primary btn-sm" onClick={() => updateEmployee(employee._id)}>Update</Button>
                                    <Button class="btn btn-primary btn-sm" onClick={() => deleteEmployeeByID(employee._id)}>Delete</Button >
                                    <Button class="btn btn-primary btn-sm" onClick={() => viewEmployee(employee._id)}>View</Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}