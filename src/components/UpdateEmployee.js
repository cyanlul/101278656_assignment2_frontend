import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, FormGroup } from 'react-bootstrap'
import '../App.css';

export default function UpdateEmployee() {

    const [employee, setEmployee] = useState([]);

    const [_id, setId] = useState(employee._id);
    const [firstName, setFirstName] = useState(employee.firstName);
    const [lastName, setLastName] = useState(employee.lastName);
    const [emailId, setEmailId] = useState(employee.emailId);

    let navigate = useNavigate();
    let { id } = useParams();

    const onCancel = (event) => {
        navigate('/')
    }

    useEffect(() => {
        async function getData() {
            await axios.get(`/api/v1/employees/${id}`).then((res) => {
                setEmployee(res.data);
            });
        }
        getData();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const updateEmployee = {
            _id: employee._id,
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };

        axios.put(`/api/v1/employees/${employee._id}`, updateEmployee).then((res) => {
            if (res.status === 200) {
                navigate('/', { replace: true });
                alert('A new Employee resource is created.');
            } else {
                alert('An error has occured!');
                console.error('An error has occured');
            }
        });
    };

    return (
        <div>
            <h1>Update Employee</h1>

            <hr />

            <FormGroup onSubmit={onSubmit}>
                <div class="form-group">
                    <label>ID: </label>
                    <input
                        type="text"
                        name="_id"
                        class="form-control form-control-sm"
                        placeholder={employee._id}
                        required
                        onChange={e => setId(e.target.value)} />
                </div>

                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        name="firstName"
                        class="form-control form-control-sm"
                        placeholder={employee.firstName}
                        required
                        onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        class="form-control form-control-sm"
                        placeholder={employee.lastName}
                        required
                        onChange={e => setLastName(e.target.value)} />
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="emailId"
                        class="form-control form-control-sm"
                        placeholder={employee.emailId}
                        required
                        onChange={e => setEmailId(e.target.value)} />
                </div>

                <br />

                <div class="btn-group">
                <Button class="btn btn-primary btn-sm" type="submit" onClick={onSubmit}>Save</Button>
                <Button class="btn btn-primary btn-sm" onClick={onCancel}>Go Back</Button>
                </div>
            </FormGroup>
        </div>
    );
}