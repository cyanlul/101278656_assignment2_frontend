import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, FormGroup} from 'react-bootstrap'

export default function AddEmployee() {

    const [_id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    let navigate = useNavigate()
    let { id } = useParams()

    useEffect(() => {
        async function getData() {
            if (id !== undefined) {
                await axios.get(`api/v1/employees/${id}`)
                    .then(res => {
                        console.log(res.data)

                        setId(res.data.employee._id)
                        setFirstName(res.data.employee.firstName)
                        setLastName(res.data.employee.lastName)
                        setEmailId(res.data.employee.emailId)
                    })
                    .catch(error => console.log(error))
            }
        } getData()
    }, []);

    const onCancel = (event) => {
        navigate('/')
    }

    const onSubmit = (event) => {
        event.preventDefault()

        let employee = {
            _id: _id,
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        }

        if (id === undefined) {
            axios.post("/api/v1/employees", employee)
                .then(res => navigate('/'))
                .catch(error => console.log(error))
        } else {
            axios.put(`/api/v1/employees/${id}`, employee)
                .then(res => navigate('/'))
                .catch(error => console.log(error))
        }

    }

    return (
        <div>
            <h1>Add a New Employee</h1>

            <hr />
            
            <FormGroup>
                <div class="form-group">
                    <label>Id: </label>
                    <input 
                    type="text" 
                    name="Id"
                    class="form-control form-control-sm"
                    value={_id} 
                    required 
                    onChange={e => setId(e.target.value)} />
                </div>

                <div>
                    <label>First Name: </label>
                    <input 
                    type="text" 
                    name="firstName"
                    class="form-control form-control-sm"
                    value={firstName} 
                    required 
                    onChange={e => setFirstName(e.target.value)} />
                </div>

                <div>
                    <label>Last Name: </label>
                    <input 
                    type="text" 
                    name="lastName"
                    class="form-control form-control-sm"
                    value={lastName} 
                    required 
                    onChange={e => setLastName(e.target.value)} />
                </div>

                <div>
                    <label>Email: </label>
                    <input 
                    type="email" 
                    name="emailId"
                    class="form-control form-control-sm"
                    value={emailId} 
                    required 
                    onChange={e => setEmailId(e.target.value)} />
                </div>

                <br/>

                <div class="btn-group">
                <Button class="btn btn-primary btn-sm" type="submit" onClick={onSubmit}>Save</Button>
                <Button class="btn btn-primary btn-sm" onClick={onCancel}>Cancel</Button>
                </div>
            </FormGroup>
        </div>
    )
}
