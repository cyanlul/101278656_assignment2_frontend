import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function navHeader() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Employment Management System</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">Employee List <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/add">Add Employee</a>
                </div>
            </div>
        </nav>
    );
}