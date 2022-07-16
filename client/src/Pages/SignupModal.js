import React from 'react'
import { Modal } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Axios from "axios"

const SignupModal = (props) => {
    const hover=(e)=> {
        e.target.style.background = '#205eb9';
      }
    const hoverStop=(e)=> {
        e.target.style.background = '#0d6efd';
      }
       
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Sign Up
            <h6>Quick and easy</h6>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div class="input-group">
            <input type="text" className="form-control" placeholder="First name"/>
            <input type="text" className="form-control" placeholder="Last name"/>
        </div>
        <div className="mb-3">
        </div>
        <div className="mb-3">
            <input
            type="email"
            className="form-control"
            placeholder="Email"/>
        </div>
        <div className="mb-3">
            <input
            type="password"
            className="form-control"
            placeholder="Enter password"/>
        </div>

        <Form.Select onChange={(event) => setAccessLevel(event.target.value)}>
            <option>Select Role</option>
            <option value="1">Student</option>
            <option value="2">Agency</option>
            <option value="3">Administrator</option>
        </Form.Select>
        <br/>
        <div className="d-grid">
            <button onClick={addUsers} onMouseOver={hover} onMouseLeave={hoverStop}  className="btn btn-primary" style={{background:"#0d6efd", border:"#0d6efd"}}>
            Sign Up
            </button>
        </div>
        </form>
        </Modal.Body>
        </Modal>
    );
}

export default SignupModal
