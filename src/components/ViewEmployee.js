import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, FormGroup } from 'react-bootstrap'
import '../App.css';

export default function ViewEmployee() {

    const [employee, setEmployee] = useState([])

    let navigate = useNavigate()
    let { id } = useParams()

    const onCancel = (event) => {
        navigate("/")
    }

    useEffect(() => {
        async function getData() {
            await axios.get(`/api/v1/employees/${id}`)
                .then(res => {
                    setEmployee(res.data)
                })
        } getData()
    });

    return (
        <div>
            <h1>View Employee Details</h1>

            <hr/>

            <FormGroup>
                <div class="form-group">
                <h3>Id: #{employee._id}</h3>
                <h3>First Name: {employee.firstName}</h3>
                <h3 >Last Name: {employee.lastName}</h3>
                <h3>Email Id: {employee.emailId}</h3>
                </div>
            </FormGroup>
            <br />
            <Button onClick={onCancel}>Go back</Button>
        </div>
    )
}