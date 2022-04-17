import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditEmployeeModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'employee', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: event.target.Id.value,
                FirstName: event.target.FirstName.value,
                LastName: event.target.LastName.value,
                Email: event.target.Email.value,
                DateOfBirthday: event.target.DateOfBirthday.value,
                Role: event.target.Role.value,
                Team: event.target.Team.value,
                Manager: event.target.Manager.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                // alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Id">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="Id" required
                                            disabled
                                            defaultValue={this.props.employeeid}
                                            placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group controlId="First Name">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name="First Name" required
                                            defaultValue={this.props.employeefirstname}
                                            placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Last Name">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="Last Name" required
                                            defaultValue={this.props.employeelastname}
                                            placeholder="Last Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Birthday date">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="date" name="Birthday date" required
                                            disabled
                                            defaultValue={this.props.employeebirthday}
                                            placeholder="Birthday date" />
                                    </Form.Group>

                                    <Form.Group controlId="Email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="Email" required
                                            defaultValue={this.props.employeemail}
                                            placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlId="Role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control type="text" name="Role" required
                                            defaultValue={this.props.employeerole}
                                            placeholder="Role" />
                                    </Form.Group>

                                    <Form.Group controlId="Team">
                                        <Form.Label>Team</Form.Label>
                                        <Form.Control type="text" name="Team" required
                                            defaultValue={this.props.employeeteam}
                                            placeholder="Team" />
                                    </Form.Group>

                                    <Form.Group controlId="Manager">
                                        <Form.Label>Manager</Form.Label>
                                        <Form.Control type="text" name="Manager" required
                                            defaultValue={this.props.employeemanager}
                                            placeholder="Manager" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.props.onHide}>
                                            Update Employee
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}